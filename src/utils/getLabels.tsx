import moment from 'moment'

const getLabels = (range: string) => {
  const now = moment()

  switch (range) {
    case '24H':
      return Array.from(Array(24).fill(0))
        .map(() => {
          return now.subtract({ hours: 1 }).format('HH:mm')
        })
        .reverse()
    case '7D':
      return Array.from(Array(7).fill(0))
        .map(() => {
          return now.subtract({ days: 1 }).format('ll')
        })
        .reverse()
    case '30D':
      return Array.from(Array(30).fill(0))
        .map(() => {
          return now.subtract({ days: 1 }).format('ll')
        })
        .reverse()
    case '90D':
      return Array.from(Array(30).fill(0))
        .map(() => {
          return now.subtract({ days: 3 }).format('ll')
        })
        .reverse()
    case '6M':
      return Array.from(Array(30).fill(0))
        .map(() => {
          return now.subtract({ days: 6 }).format('ll')
        })
        .reverse()
    case '1M':
      return Array.from(Array(10).keys())
    case '15M':
      return Array.from(Array(10).keys())
    case '30M':
      return Array.from(Array(10).keys())
    case '1H':
      return Array.from(Array(10).keys())
    case '1D':
      return Array.from(Array(10).keys())
    default:
      return Array.from(Array(30).fill(0))
        .map(() => {
          return now.subtract({ days: 12 }).format('ll')
        })
        .reverse()
  }
}

export default getLabels
