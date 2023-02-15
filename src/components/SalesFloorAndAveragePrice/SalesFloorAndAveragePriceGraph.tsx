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
  TimeScale,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import 'chartjs-adapter-moment'
import moment from 'moment'
import { faker } from '@faker-js/faker'
import Image from 'next/image'
import getLabels from '@/utils/getLabels'
import getData from '@/utils/getDataSales'
import getDataFloorAndAveragePrice from '@/utils/getDataFloorAndAveragePrice'

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
  Filler,
  TimeScale
)

// const labels = ['21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00']

/* const now = moment()
const labels = Array.from(Array(24).fill(0)).map((el) => {
  return now.subtract({ hours: 1 }).format('HH:mm')
})reverse()
 */
/* const now = moment()
const labels = Array.from(Array(7).fill(0)).map((el) => {
  return now.subtract({ days: 1 }).format('ll')
}).reverse() */
/* const now = moment()
const labels = Array.from(Array(30).fill(0))
  .map((el) => {
    return now.subtract({ days: 1 }).format('ll')
  })
  .reverse() */
const now = moment()
const labels = Array.from(Array(30).fill(0))
  .map((el) => {
    return now.subtract({ days: 3 }).format('ll')
  })
  .reverse()

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

const SalesFloorAndAveragePriceGraph = ({ range }: { range: string }) => {
  const labels = getLabels(range)
  const data = getDataFloorAndAveragePrice(labels)

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
