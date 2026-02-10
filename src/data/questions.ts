/**
 * questions.ts
 * ------------------------------------------------------
 * Define las preguntas del quiz y sus posibles respuestas.
 * Cada respuesta suma pesos a distintos tags de personalidad.
 */

import type { Tag } from './characters'

/**
 * Respuesta de una pregunta
 * - tags: pesos por tag (solo tags válidos)
 */
export type Answer = {
  id: string
  text: string
  image: string
  tags: Partial<Record<Tag, number>>
}

/**
 * Pregunta del quiz
 */
export type Question = {
  id: string
  text: string
  answers: Answer[]
}

/**
 * Banco de preguntas
 * (El motor del quiz selecciona `total` preguntas aleatorias)
 */
export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: '¿Qué plan te apetece más un viernes por la noche?',
    answers: [
      {
        id: 'q1a1',
        text: 'Salir a tomar algo y desconectar',
        image: '/quiz/q1-planning1.webp',
        tags: { fun: 2, friendly: 1, chaos: 1 },
      },
      {
        id: 'q1a2',
        text: 'Quedarme en casa con algo tranquilo (serie/libro/música)',
        image: '/quiz/q1-planning2.webp',
        tags: { calm: 2, nerd: 1, moral: 1 },
      },
      {
        id: 'q1a3',
        text: 'Hacer plan familiar o con gente cercana',
        image: '/quiz/q1-planning3.webp',
        tags: { family: 3, friendly: 1, calm: 1 },
      },
      {
        id: 'q1a4',
        text: 'Improvisar algo loco y ver qué pasa',
        image: '/quiz/q1-planning4.webp',
        tags: { chaos: 3, fun: 2, ego: 1 },
      },
    ],
  },

  {
    id: 'q2',
    text: '¿Cómo sueles reaccionar cuando algo sale mal?',
    answers: [
      {
        id: 'q2a1',
        text: 'Me lo tomo con humor y tiro para adelante',
        image: '/quiz/q2-reaction1.webp',
        tags: { fun: 2, calm: 1, friendly: 1 },
      },
      {
        id: 'q2a2',
        text: 'Analizo qué falló y busco la solución correcta',
        image: '/quiz/q2-reaction2.webp',
        tags: { nerd: 3, ambition: 1, moral: 1 },
      },
      {
        id: 'q2a3',
        text: 'Me preocupo bastante, pero intento arreglarlo',
        image: '/quiz/q2-reaction3.webp',
        tags: { anxious: 3, family: 1, work: 1 },
      },
      {
        id: 'q2a4',
        text: 'Me enfado un poco y suelto algún comentario sarcástico',
        image: '/quiz/q2-reaction4.webp',
        tags: { sarcasm: 2, cynic: 2, tough: 1 },
      },
    ],
  },

  {
    id: 'q3',
    text: 'En un grupo de amigos eres...',
    answers: [
      {
        id: 'q3a1',
        text: 'El que anima el ambiente',
        image: '/quiz/q3-person1.webp',
        tags: { fun: 3, ego: 1, friendly: 1 },
      },
      {
        id: 'q3a2',
        text: 'El que da consejos y calma las cosas',
        image: '/quiz/q3-person2.webp',
        tags: { calm: 3, moral: 2, friendly: 1 },
      },
      {
        id: 'q3a3',
        text: 'El que sabe de todo y lo explica',
        image: '/quiz/q3-person3.webp',
        tags: { nerd: 3, ambition: 1, moral: 1 },
      },
      {
        id: 'q3a4',
        text: 'El que aparece con una idea rara de la nada',
        image: '/quiz/q3-person4.webp',
        tags: { weird: 3, chaos: 1, creative: 1 },
      },
    ],
  },

  {
    id: 'q4',
    text: 'En el trabajo/estudio tú…',
    answers: [
      {
        id: 'q4a1',
        text: 'Hago lo justo y busco ahorrar esfuerzo',
        image: '/quiz/q4-work1.webp',
        tags: { work: 1, fun: 1, cynic: 1 },
      },
      {
        id: 'q4a2',
        text: 'Me lo tomo en serio y quiero hacerlo perfecto',
        image: '/quiz/q4-work2.webp',
        tags: { ambition: 3, nerd: 2, anxious: 1 },
      },
      {
        id: 'q4a3',
        text: 'Me encargo de que todo funcione y haya orden',
        image: '/quiz/q4-work3.webp',
        tags: { work: 3, authority: 2, calm: 1 },
      },
      {
        id: 'q4a4',
        text: 'Si puedo saltarme una regla, lo intento',
        image: '/quiz/q4-work4.webp',
        tags: { chaos: 3, sarcasm: 1, ego: 1 },
      },
    ],
  },

  {
    id: 'q5',
    text: '¿Qué valoras más en la vida?',
    answers: [
      {
        id: 'q5a1',
        text: 'Disfrutar, pasarlo bien y no complicarme',
        image: '/quiz/q5-life1.webp',
        tags: { fun: 3, calm: 1, chaos: 1 },
      },
      {
        id: 'q5a2',
        text: 'La familia y sentirme acompañado',
        image: '/quiz/q5-life2.webp',
        tags: { family: 4, friendly: 2, moral: 1 },
      },
      {
        id: 'q5a3',
        text: 'Aprender, mejorar y conseguir objetivos',
        image: '/quiz/q5-life3.webp',
        tags: { nerd: 3, ambition: 3, moral: 1 },
      },
      {
        id: 'q5a4',
        text: 'Tener poder/estatus y que me respeten',
        image: '/quiz/q5-life4.webp',
        tags: { ego: 3, authority: 2, greed: 1, ambition: 1 },
      },
    ],
  },
]
