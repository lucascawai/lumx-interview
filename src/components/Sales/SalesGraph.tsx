import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      min: 0,
      max: 6,
      grid: {
        display: false,
      },
    },
    y: {
      min: -0.2,
      grid: {
        color: '#4E4B66',
        drawTicks: false,
      },
      ticks: {
        callback: function (value: any, index: number) {
          if (value < 0) {
            return index !== 0 ? 'VOL' : ''
          }
          return value
        },
      },
    },
    y1: {
      min: 0,
      max: 3,
      display: false,
    },
  },
}

export const data = {
  labels,
  datasets: [
    {
      type: 'scatter' as const,
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.float({ min: 0, max: 6 }),
        y: faker.datatype.float({ min: 0, max: 0.5 }),
      })),
    },
    {
      type: 'scatter' as const,
      backgroundColor: 'rgb(75, 192, 192)',
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.float({ min: 0, max: 6 }),
        y: faker.datatype.float({ min: 0, max: 0.5 }),
      })),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'scatter' as const,
      backgroundColor: 'rgb(53, 162, 235)',
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.float({ min: 0, max: 6 }),
        y: faker.datatype.float({ min: 0, max: 0.5 }),
      })),
    },
    {
      type: 'bar' as const,
      backgroundColor: 'rgb(10, 12, 192)',
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.float({ min: 0, max: 6 }),
        y: faker.datatype.float({ min: 0, max: 0.5 }),
      })),
      borderColor: 'white',
      borderWidth: 2,
      yAxisID: 'y1',
    },
  ],
}

const SalesGraph = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="text-bold mt-4 ml-4 text-sm leading-6 text-gray-500 sm:ml-6">
          PRICE IN ETH
        </div>
        <div className="flex flex-row content-baseline">
          <div className="text-bold mt-3 h-6 text-sm leading-6 text-gray-500 sm:mt-4">
            Outliners:{' '}
          </div>
          <div className="mt-2 ml-3 h-8 w-12 rounded-l bg-gray-100 text-center align-middle text-gray-600 sm:mt-4">
            ON
          </div>
          <div className="mt-2 mr-2 h-8 w-12 rounded-r bg-gray-500 text-center align-middle text-gray-400 sm:mt-4 sm:mr-6">
            OFF
          </div>
        </div>
      </div>
      <Chart
        type="scatter"
        data={data}
        options={options}
        className="mx-1 max-w-md p-3 sm:mx-0 sm:max-h-96 sm:max-w-none sm:p-6"
      />
    </>
  )
}

export default SalesGraph
