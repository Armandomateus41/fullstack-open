export const voteFor = (votes, selected) => votes.map((value, index) => index === selected ? value + 1 : value)
export const findWinner = votes => votes.reduce((best, value, index) => value > votes[best] ? index : best, 0)
export const nextIndex = (current, count, random = Math.random) => {
  if (count < 2) return 0
  return (current + 1 + Math.floor(random() * (count - 1))) % count
}

