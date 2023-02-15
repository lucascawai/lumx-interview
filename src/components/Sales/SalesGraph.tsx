import { Dispatch, MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
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
  Tick,
  CoreScaleOptions,
  Scale,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import getDataSales from '@/utils/getDataSales'
import getLabelsSales from '@/utils/getLabelsSales'

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function (
          this: Scale<CoreScaleOptions>,
          value: number | string,
          index: number,
          ticks: Tick[]
        ): string | number | string[] | number[] {
          return index % 12 ? '' : this.getLabelForValue(value as number)
        },
      },
    },
    y: {
      min: -0.2,
      grid: {
        color: '#4E4B66',
        drawTicks: false,
      },
      ticks: {
        callback: function (value: number | string, index: number) {
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

const SalesGraph = ({ range }: { range: string }) => {
  const [outliners, setOutliners] = useState(true)
  const labels = getLabelsSales(range)
  const data = getDataSales(labels, outliners)

  const toggleOutliners = (_: MouseEvent): void => {
    setOutliners(!outliners)
  }

  return (
    <>
      <div className="mx-4 mt-4 bg-gray-700 sm:mx-14 sm:mt-6">
        <div className="flex flex-row justify-between">
          <div className="text-bold mt-4 ml-4 text-sm leading-6 text-gray-500 sm:ml-6">
            PRICE IN ETH
          </div>
          <OutlinersToggle outliners={outliners} toggleOutliners={toggleOutliners} />
        </div>
        <Chart
          type="line"
          data={data}
          options={options}
          className="mx-1 max-w-md p-3 sm:mx-0 sm:max-h-96 sm:max-w-none sm:p-6"
        />
      </div>
    </>
  )
}

const OutlinersToggle = ({
  outliners,
  toggleOutliners,
}: {
  outliners: boolean
  toggleOutliners: MouseEventHandler
}) => {
  return (
    <div className="flex flex-row content-baseline">
      <div className="text-bold mt-3 h-6 text-sm leading-6 text-gray-500 sm:mt-4">Outliners: </div>
      <button
        type="button"
        onClick={toggleOutliners}
        disabled={outliners}
        className={
          outliners
            ? 'mt-2 ml-3 h-8 w-12 rounded-l bg-gray-100 text-center align-middle text-gray-600 sm:mt-4'
            : 'mt-2 ml-3 h-8 w-12 rounded-l bg-gray-500 text-center align-middle text-gray-400 sm:mt-4'
        }
      >
        ON
      </button>
      <button
        type="button"
        onClick={toggleOutliners}
        disabled={!outliners}
        className={
          !outliners
            ? 'mt-2 mr-2 h-8 w-12 rounded-r bg-gray-100 text-center align-middle text-gray-600 sm:mt-4 sm:mr-6'
            : 'mt-2 mr-2 h-8 w-12 rounded-r bg-gray-500 text-center align-middle text-gray-400 sm:mt-4 sm:mr-6'
        }
      >
        OFF
      </button>
    </div>
  )
}

export default SalesGraph
