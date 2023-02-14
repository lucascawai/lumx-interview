import HypeTrendSalesAmountGraph from './HypeTrendSalesAmountGraph'
import HypeTrendSalesFloorGraph from './HypeTrendSalesFloorGraph'
import HypeTrendVolumeGraph from './HypeTrendVolumeGraph'

const HypeTrend = () => {
  return (
    <div className="flex-auto">
      <div className="flex flex-row justify-end">
        <div className="flex-auto bg-gray-800"></div>
        <div className="ml-3 flex flex-auto content-center justify-between bg-gray-700 py-5 sm:grow sm:justify-end">
          <div className="text-xs leading-6 text-gray-600 sm:my-auto">Time:</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">24H</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">7D</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">30D</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">90D</div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row content-baseline justify-between sm:flex-col">
            <div className="text-bold my-3 ml-3 align-middle text-lg text-gray-100 sm:my-4 sm:ml-6">
              Hype Trend
            </div>
          </div>
          <div className="my-3 ml-3 flex content-center justify-between sm:grow sm:justify-end">
            <div className="text-xs leading-6 text-gray-600 sm:my-auto">HYPER THERMOMETER:</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">24H</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">7D</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">30D</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">90D</div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-10 bg-gray-700 sm:mb-28 sm:mt-6">
        <HypeTrendVolumeGraph />
        <HypeTrendSalesFloorGraph />
        <HypeTrendSalesAmountGraph />
      </div>
    </div>
  )
}

export default HypeTrend
