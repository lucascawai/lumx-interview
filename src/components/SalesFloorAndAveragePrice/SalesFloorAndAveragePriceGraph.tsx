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
  responsive: true,
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
      min: 0,
      max: 20,
      grid: {
        display: false,
      },
    },
    y: {
      min: 17,
      max: 25,
      grid: {
        color: '#4E4B66',
        drawTicks: false,
        lineWidth: 0.3,
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
  },
}

export const data = {
  labels,
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

const SalesFloorAndAveragePriceGraph = () => {
  return (
    <>
      <Chart
        type="line"
        data={data}
        options={options}
        className="mx-1 max-w-md p-3 sm:mx-0 sm:max-h-96 sm:max-w-none sm:p-6"
      />
      <div className="hidden sm:flex sm:flex-row sm:justify-center">
        <div className="my-6 mr-5 flex h-6 w-32 flex-row">
          <Image src="/purple-line.svg" alt="Purple Line" width={30} height={2} />
          <div className="text-bold ml-3 text-sm text-gray-100">Floor Price</div>
        </div>
        <div className="my-6 ml-5 flex h-6 w-32 flex-row">
          <Image src="/dotted-line.svg" alt="Dotted Line" width={18} height={2} />
          <div className="text-bold ml-3 text-sm text-gray-100">Average Price</div>
        </div>
      </div>
    </>
  )
}

export default SalesFloorAndAveragePriceGraph
