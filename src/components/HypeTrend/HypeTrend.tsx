import { useState } from 'react'
import HypeTrendHeader from './HypeTrendHeader'
import HypeTrendSalesAmountGraph from './HypeTrendSalesAmountGraph'
import HypeTrendSalesFloorGraph from './HypeTrendSalesFloorGraph'
import HypeTrendVolumeGraph from './HypeTrendVolumeGraph'

export const rangesHypeTrend = ['1M', '5M', '15M', '30M', '1H', '1D']

const HypeTrend = () => {
  const [rangeSelected, setRangeSelected] = useState(0)

  return (
    <div className="flex-auto">
      <HypeTrendHeader rangeSelected={rangeSelected} setRangeSelected={setRangeSelected} />
      <div className="mt-4 mb-10 bg-gray-700 sm:mb-28 sm:mt-6">
        <HypeTrendVolumeGraph range={rangesHypeTrend[rangeSelected]} />
        <HypeTrendSalesFloorGraph range={rangesHypeTrend[rangeSelected]} />
        <HypeTrendSalesAmountGraph range={rangesHypeTrend[rangeSelected]} />
      </div>
    </div>
  )
}

export default HypeTrend
