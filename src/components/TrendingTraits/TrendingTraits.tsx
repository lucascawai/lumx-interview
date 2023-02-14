import HypeTrendSalesAmountGraph from '../HypeTrend/HypeTrendSalesAmountGraph'
import HypeTrendSalesFloorGraph from '../HypeTrend/HypeTrendSalesFloorGraph'
import HypeTrendVolumeGraph from '../HypeTrend/HypeTrendVolumeGraph'
import Image from 'next/image'
import TrendingTraitsItem from './TrendingTraitsItem'

const TrendingTraits = () => {
  return (
    <div className="flex-auto sm:ml-8">
      <div className="flex flex-row justify-end">
        <div className="flex-auto bg-gray-800"></div>
        <div className="ml-3 flex flex-auto content-center justify-between bg-gray-700 py-5 sm:grow sm:justify-end">
          <div className="text-xs leading-6 text-gray-600 sm:my-auto">Time:</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">1M</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">5D</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">15M</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">30M</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">1H</div>
          <div className="text-center sm:my-auto sm:mx-1 sm:h-9">1D</div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="flex flex-row content-center justify-between">
          <div className="text-bold my-3 ml-3 align-middle text-lg text-gray-100 sm:my-4 sm:ml-6">
            Trending Traits
          </div>
          <div className="flex flex-row">
            <div className="text-bold my-auto mx-1 text-center align-middle text-lg leading-6 text-gray-100">
              %
            </div>
            <Image src="/icn.svg" alt="Icon Up Down" width={8} height={10} className="mx-1" />
          </div>
          <div className="mr-5 flex flex-row">
            <div className="text-bold my-auto mx-1 text-center align-middle text-lg leading-6 text-gray-100">
              AVG LAST SALES
            </div>
            <Image src="/icn.svg" alt="Icon Up Down" width={8} height={10} className="mx-1" />
          </div>
        </div>
      </div>
      <div className="mt-4 mb-10 bg-gray-700 sm:mb-28 sm:mt-6">
        {Array.from(Array(9).keys()).map((value, index) => {
          return <TrendingTraitsItem key={index} />
        })}
      </div>
    </div>
  )
}

export default TrendingTraits
