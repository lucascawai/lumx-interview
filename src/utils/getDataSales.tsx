import moment from 'moment'
import { faker } from '@faker-js/faker'

const getDataSales = (labels: string[] | number[], outliners: boolean) => {
  return {
    labels: labels as string[],
    datasets: [
      {
        type: 'line' as const,
        id: 'outliners',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: outliners ? 2 : 0,
        showLine: false,
        fill: false,
        data: labels.map(() => faker.datatype.float({ min: 0, max: 0.5 })),
      },
      {
        type: 'line' as const,
        showLine: false,
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => faker.datatype.float({ min: 0, max: 0.5 })),
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'line' as const,
        showLine: false,
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => faker.datatype.float({ min: 0, max: 0.5 })),
      },
      {
        type: 'bar' as const,
        backgroundColor: 'rgb(255, 255, 255)',
        data: labels.map(() => faker.datatype.float({ min: 0, max: 0.5 })),
        borderColor: 'white',
        borderWidth: 2,
        yAxisID: 'y1',
      },
    ],
  }
}

export default getDataSales
