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
import Image from 'next/image'
import getLabels from '@/utils/getLabels'
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
      <div className="mx-4 mt-4 bg-gray-700 sm:mx-14 sm:mt-6">
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
      </div>
    </>
  )
}

export default SalesFloorAndAveragePriceGraph
