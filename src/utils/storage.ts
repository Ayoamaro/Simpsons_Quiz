export type QuizUser = {
  name: string
  age: number
  gender?: string
}

export type QuizState = {
  user: QuizUser
  answers: Record<string, string>
  resultCharacterId?: number
}

const KEY = 'simpsons-quiz:v1'

export function saveState(state: QuizState) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function loadState(): QuizState | null {
  const raw = localStorage.getItem(KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as QuizState
  } catch {
    return null
  }
}

export function clearState() {
  localStorage.removeItem(KEY)
}
