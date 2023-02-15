import moment from 'moment'

const getLabelsSales = (range: string) => {
  const now = moment()

  switch (range) {
    case '24H':
      return Array.from(Array(144).fill(0))
        .map(() => {
          return now.subtract({ minutes: 10 }).format('HH:mm')
        })
        .reverse()
    case '7D':
      return Array.from(Array(144).fill(0))
        .map(() => {
          return now.subtract({ minutes: 70 }).format('ll')
        })
        .reverse()
    case '30D':
      return Array.from(Array(144).fill(0))
        .map(() => {
          return now.subtract({ hours: 5 }).format('ll')
        })
        .reverse()
    case '90D':
      return Array.from(Array(144).fill(0))
        .map(() => {
          return now.subtract({ hours: 15 }).format('ll')
        })
        .reverse()
    case '6M':
      return Array.from(Array(144).fill(0))
        .map(() => {
          return now.subtract({ hours: 30 }).format('ll')
        })
        .reverse()
    default:
      return Array.from(Array(144).fill(0))
        .map(() => {
          return now.subtract({ hours: 60 }).format('ll')
        })
        .reverse()
  }
}

export default getLabelsSales
