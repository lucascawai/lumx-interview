import { faker } from '@faker-js/faker'

const getDataHypeTrendSalesAmount = (labels: string[] | number[]) => {
  return {
    labels: labels as string[],
    datasets: [
      {
        type: 'line' as const,
        borderColor: '#4DBC19',
        backgroundColor: 'rgba(77,188,25, 0.05)',
        fill: 'origin',
        borderWidth: 2,
        tension: 0.3,
        data: labels.map(() => faker.datatype.float({ min: 0, max: 0.5 })),
        pointRadius: 0,
      },
    ],
  }
}

export default getDataHypeTrendSalesAmount
