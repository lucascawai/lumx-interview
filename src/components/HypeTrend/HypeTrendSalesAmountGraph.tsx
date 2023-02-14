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
  Filler,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import Image from 'next/image'

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler
)

const labels = Array.from(Array(10).keys())
export const options = {
  responsize: true,
  plugins: {
    legend: {
      display: false,
    },
    filler: {
      propagate: true,
    },
  },
  scales: {
    x: {
      display: false,
      min: 0,
      max: 20,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      min: 0,
      max: 0.5,
      grid: {
        display: false,
      },
    },
  },
}

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      borderColor: '#4DBC19',
      backgroundColor: 'rgba(77,188,25, 0.05)',
      fill: 'origin',
      borderWidth: 2,
      tension: 0.3,
      data: [0.1, 0.2, 0.4, 0.5, 0.3, 0.1, 0, 0.2, 0.3, 0.2, 0.4, 0.5, 0.3, 0.1, 0, 0.2, 0.3],
      pointRadius: 0,
    },
  ],
}

const HypeTrendSalesAmountGraph = () => {
  return (
    <>
      <div className="bg-gray-700">
        <div className="justify-begin flex flex-row content-baseline sm:flex-col">
          <div className="text-bold ml-3 mt-3 align-middle text-sm text-gray-500 sm:ml-6 sm:mb-4">
            Sales Amount
          </div>
        </div>
      </div>
      <div className="flex flex-row content-center bg-gray-700">
        <div className="pl-6 pb-6">
          <Chart
            type="line"
            data={data}
            options={options}
            height={100}
            width={600}
            className="max-w-sm sm:max-w-none"
          />
        </div>
        <div className="flex grow flex-col content-center justify-center">
          <div className="flex flex-row justify-center">
            <Image
              src="/arrow-up.svg"
              alt="Arrow Down"
              width={7}
              height={12}
              className="mx-1 bg-gray-700"
            />
            <div className="text-bold m-1 text-center text-xs leading-6 text-support-green sm:text-lg">
              2,32%
            </div>
          </div>
          <div className="text-bold flex justify-center text-center text-lg text-gray-100">
            1.203
          </div>
        </div>
      </div>
    </>
  )
}

export default HypeTrendSalesAmountGraph
