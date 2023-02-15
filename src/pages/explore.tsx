import CardCollection from '@/components/CardCollection/CardCollection'
import Sales from '@/components/Sales/Sales'
import SalesFloorAndAveragePrice from '@/components/SalesFloorAndAveragePrice/SalesFloorAndAveragePrice'
import HypeTrend from '@/components/HypeTrend/HypeTrend'
import TrendingTraits from '@/components/TrendingTraits/TrendingTraits'

export default function Explore() {
  return (
    <>
      <CardCollection />
      <Sales />
      <SalesFloorAndAveragePrice />
      <div className="mx-4 mt-6 sm:mx-14 sm:mt-16">
        <div className="flex flex-col sm:flex-row">
          <HypeTrend />
          <TrendingTraits />
        </div>
      </div>
    </>
  )
}
