import { faker } from '@faker-js/faker'

const getDataFloorAndAveragePrice = (labels: string[] | number[]) => {
  return {
    labels: labels as string[],
    datasets: [
      {
        type: 'line' as const,
        borderColor: '#8775D0',
        backgroundColor: 'rgba(135,117,208, 0.1)',
        fill: 'origin',
        borderWidth: 2,
        tension: 0.3,
        data: labels.map(() => faker.datatype.number({ min: 19, max: 24 })),
        pointRadius: 0,
        z: -1,
      },
      {
        type: 'line' as const,
        tension: 0.3,
        data: labels.map(() => faker.datatype.number({ min: 19, max: 24 })),
        borderColor: '#80CCF4',
        borderWidth: 2,
        pointRadius: 0,
        borderDash: [5, 5],
      },
    ],
  }
}

export default getDataFloorAndAveragePrice
