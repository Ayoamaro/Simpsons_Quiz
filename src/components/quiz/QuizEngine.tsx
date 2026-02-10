import React, { useMemo, useRef, useState } from 'react'
import type { Answer, Question } from '../../data/questions'
import { CHARACTERS } from '../../data/characters'

/**
 * Fisher–Yates shuffle (no muta el array original)
 */
function shuffle<T>(arr: T[]) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * QuizEngine
 * ------------------------------------------------------
 * - Selecciona `total` preguntas aleatorias
 * - Guarda las respuestas elegidas
 * - Calcula el personaje ganador por similitud (producto escalar)
 * - Redirige a /loading?id=...
 */
export default function QuizEngine({
  questions,
  total = 5,
}: {
  questions: Question[]
  total?: number
}) {
  /**
   * Preguntas elegidas (solo se recalcula si cambian questions/total)
   */
  const picked = useMemo(
    () => shuffle(questions).slice(0, total),
    [questions, total]
  )

  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)

  /**
   * Guardamos picks en un ref para evitar stale closures dentro de setTimeout
   */
  const picksRef = useRef<string[]>([])

  const current = picked[idx]
  const currentNumber = idx + 1
  const percent = Math.round((currentNumber / total) * 100)

  /**
   * Calcula el ganador a partir de picks + preguntas elegidas
   */
  const computeWinner = (finalPicks: string[]) => {
    // Set para lookups O(1)
    const pickSet = new Set(finalPicks)

    // Acumula pesos por tag en base a respuestas seleccionadas
    const tagTotals: Record<string, number> = {}
    for (const q of picked) {
      for (const a of q.answers) {
        if (!pickSet.has(a.id)) continue
        for (const [tag, value] of Object.entries(a.tags)) {
          tagTotals[tag] = (tagTotals[tag] ?? 0) + value
        }
      }
    }

    // Producto escalar entre tagTotals y cada perfil
    let best = CHARACTERS[0]
    let bestScore = -Infinity

    for (const ch of CHARACTERS) {
      let score = 0
      for (const [tag, v] of Object.entries(tagTotals)) {
        score += v * (ch.profile[tag] ?? 0)
      }
      if (score > bestScore) {
        bestScore = score
        best = ch
      }
    }

    return best
  }

  /**
   * Maneja la selección de una respuesta
   */
  const onPick = (answer: Answer) => {
    setSelected(answer.id)
    picksRef.current = [...picksRef.current, answer.id]

    // Pequeño delay para que se vea el "active" antes de cambiar
    setTimeout(() => {
      setSelected(null)

      if (idx < total - 1) {
        setIdx((v) => v + 1)
        return
      }

      const winner = computeWinner(picksRef.current)
      window.location.href = `/loading?id=${encodeURIComponent(winner.id)}`
    }, 250)
  }

  /**
   * Clases reutilizables
   */
  const cardBtnBase =
    'group flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-md transition-transform active:translate-y-0.5'
  const dotBase = 'h-3 w-3 rounded-full border-2 border-black'

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div className="w-full rounded-2xl border-2 border-black bg-white px-5 py-4 shadow-md sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-wide text-gray-700">
              Progreso de la caja
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {percent}% completado
            </p>
          </div>

          <p className="whitespace-nowrap text-xs font-semibold text-gray-600">
            {currentNumber} de {total} rosquillas
          </p>
        </div>

        <div className="mt-4">
          <div className="relative h-5 w-full overflow-hidden rounded-full border-2 border-black bg-gray-100">
            <div
              className="absolute left-0 top-0 h-full bg-yellow-300 transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="mt-3 flex items-center gap-2">
            {Array.from({ length: total }, (_, i) => (
              <span
                key={i}
                className={[
                  dotBase,
                  i < currentNumber ? 'bg-yellow-300' : 'bg-white',
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Question */}
      <section className="space-y-4">
        <div className="inline-flex items-center rounded-full border-2 border-black bg-yellow-200 px-4 py-1 text-xs font-extrabold uppercase tracking-wide">
          Pregunta {currentNumber}
        </div>

        <h1 className="text-3xl font-black leading-tight sm:text-4xl">
          {current.text}
        </h1>

        <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 sm:gap-6">
          {current.answers.map((a) => {
            const isActive = selected === a.id
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => onPick(a)}
                className={[
                  cardBtnBase,
                  isActive ? 'ring-4 ring-yellow-300' : 'hover:translate-y-px',
                ].join(' ')}
              >
                {/* Imagen pegada al borde superior */}
                <div className="aspect-3/2 w-full overflow-hidden rounded-t-2xl bg-black">
                  <img
                    src={a.image}
                    alt={a.text}
                    className="block h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-black bg-yellow-100 text-sm font-black">
                    ✓
                  </span>
                  <p className="font-extrabold leading-snug">{a.text}</p>
                </div>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}
