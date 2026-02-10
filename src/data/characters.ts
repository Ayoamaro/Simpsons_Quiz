/**
 * characters.ts
 * ------------------------------------------------------
 * Define los perfiles de personalidad de cada personaje
 * usados por el motor del quiz para calcular el resultado.
 */

/**
 * Tags posibles del sistema de personalidad
 * Usar `as const` permite inferir un union type seguro.
 */
export const TAGS = [
  'family',
  'moral',
  'nerd',
  'calm',
  'fun',
  'chaos',
  'ego',
  'ambition',
  'greed',
  'authority',
  'work',
  'sports',
  'music',
  'creative',
  'sarcasm',
  'friendly',
  'cynic',
  'tough',
  'anxious',
  'weird',
] as const

/**
 * Tipo union de todos los tags válidos
 */
export type Tag = (typeof TAGS)[number]

/**
 * Perfil de personalidad de un personaje
 * - Las claves del profile SOLO pueden ser tags válidos
 * - Los valores representan el peso de afinidad
 */
export type CharacterProfile = {
  id: number
  name: string
  profile: Partial<Record<Tag, number>>
}

/**
 * Lista de personajes disponibles en el quiz
 * El motor elegirá el mejor match comparando perfiles
 */
export const CHARACTERS: CharacterProfile[] = [
  {
    id: 1,
    name: 'Homer Simpson',
    profile: { fun: 4, chaos: 3, family: 2, work: 1, ego: 2 },
  },
  {
    id: 2,
    name: 'Marge Simpson',
    profile: { family: 5, moral: 3, calm: 3, friendly: 2, anxious: 1 },
  },
  {
    id: 3,
    name: 'Bart Simpson',
    profile: { chaos: 5, fun: 3, tough: 2, sarcasm: 2, ego: 1 },
  },
  {
    id: 4,
    name: 'Lisa Simpson',
    profile: { nerd: 5, moral: 3, music: 3, ambition: 2, calm: 1 },
  },
  {
    id: 5,
    name: 'Maggie Simpson',
    profile: { weird: 2, calm: 2, family: 2 },
  },

  {
    id: 7,
    name: 'Ned Flanders',
    profile: { moral: 5, family: 4, calm: 2, friendly: 3, authority: 1 },
  },
  {
    id: 8,
    name: 'Milhouse Van Houten',
    profile: { anxious: 4, nerd: 2, friendly: 3, weird: 1 },
  },
  {
    id: 9,
    name: 'Nelson Muntz',
    profile: { tough: 5, chaos: 2, cynic: 2, sports: 2 },
  },
  {
    id: 10,
    name: 'Ralph Wiggum',
    profile: { weird: 5, calm: 2, friendly: 2, anxious: 1 },
  },
  {
    id: 11,
    name: 'Martin Prince',
    profile: { nerd: 5, ambition: 3, anxious: 2, ego: 1 },
  },

  {
    id: 12,
    name: 'Krusty el Payaso',
    profile: { fun: 5, ego: 4, cynic: 3, chaos: 2, greed: 2 },
  },
  {
    id: 13,
    name: 'Sr. Burns',
    profile: { greed: 5, authority: 4, ambition: 4, cynic: 3, ego: 2 },
  },
  {
    id: 14,
    name: 'Waylon Smithers',
    profile: { work: 5, authority: 2, anxious: 2, friendly: 2, ambition: 1 },
  },
  {
    id: 15,
    name: 'Moe Szyslak',
    profile: { cynic: 5, friendly: 2, anxious: 2, chaos: 2, work: 2 },
  },
  {
    id: 16,
    name: 'Apu Nahasapeemapetilon',
    profile: { work: 5, family: 3, moral: 2, nerd: 2, ambition: 2 },
  },

  {
    id: 17,
    name: 'Jefe Wiggum',
    profile: { authority: 4, chaos: 2, fun: 2, work: 1, ego: 1 },
  },
  {
    id: 18,
    name: 'Seymour Skinner',
    profile: { authority: 4, work: 4, anxious: 3, moral: 1, nerd: 1 },
  },
  {
    id: 19,
    name: 'Edna Krabappel',
    profile: { cynic: 4, sarcasm: 3, work: 2, friendly: 1, chaos: 1 },
  },
  {
    id: 20,
    name: 'Willie (Jardinero)',
    profile: { tough: 4, work: 3, cynic: 2, chaos: 1 },
  },
  {
    id: 21,
    name: 'Otto',
    profile: { fun: 4, music: 3, chaos: 2, calm: 1, weird: 1 },
  },

  {
    id: 22,
    name: 'Lenny Leonard',
    profile: { work: 3, friendly: 3, fun: 2, cynic: 2 },
  },
  {
    id: 23,
    name: 'Carl Carlson',
    profile: { work: 3, friendly: 2, calm: 2, cynic: 1 },
  },
  {
    id: 24,
    name: 'Barney Gumble',
    profile: { fun: 4, chaos: 3, cynic: 2, friendly: 1 },
  },
  {
    id: 25,
    name: 'El Dependiente de la Tienda de Cómics',
    profile: { nerd: 5, cynic: 4, ego: 3, sarcasm: 2 },
  },
  {
    id: 26,
    name: 'Profesor Frink',
    profile: { nerd: 5, weird: 3, ambition: 2, anxious: 1 },
  },

  {
    id: 27,
    name: 'Patty Bouvier',
    profile: { cynic: 4, sarcasm: 3, tough: 2, calm: 1 },
  },
  {
    id: 28,
    name: 'Selma Bouvier',
    profile: { cynic: 4, anxious: 2, sarcasm: 2, family: 1 },
  },
  {
    id: 29,
    name: 'Kent Brockman',
    profile: { ego: 4, authority: 2, cynic: 3, ambition: 2 },
  },
  {
    id: 30,
    name: 'Troy McClure',
    profile: { ego: 5, fun: 3, creative: 2, ambition: 2 },
  },
  {
    id: 31,
    name: 'Sideshow Bob',
    profile: { ambition: 5, ego: 3, nerd: 2, cynic: 2, chaos: 2 },
  },
]
