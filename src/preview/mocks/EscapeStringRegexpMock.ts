export function escapeStringRegexp(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Implementación mínima
}

export default escapeStringRegexp
