import colors from "./colors"

export function randomColor() {
  const length = colors().length
  const num = Math.floor(Math.random() * length)
  return colors()[num]
}
