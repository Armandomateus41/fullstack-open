export const calculateStatistics = (good, neutral, bad) => {
  const total = good + neutral + bad
  return {
    total,
    average: total === 0 ? 0 : (good - bad) / total,
    positive: total === 0 ? 0 : (good / total) * 100,
  }
}

