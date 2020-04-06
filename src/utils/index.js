export const compose = (...functions) => (component) => (
  functions.reduceRight((wrapped, f) => f(wrapped), component)
)
