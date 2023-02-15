import TrendingTraitsItem from './TrendingTraitsItem'
import TrendingTraitsHeader from './TredingTraitsHeader'
import { useState } from 'react'

export const rangesTrendingTraits = ['1M', '5M', '15M', '30M', '1H', '1D']

const TrendingTraits = () => {
  const [rangeSelected, setRangeSelected] = useState(0)

  return (
    <div className="flex-auto sm:ml-8">
      <TrendingTraitsHeader rangeSelected={rangeSelected} setRangeSelected={setRangeSelected} />
      <div className="mt-4 mb-10 bg-gray-700 sm:mb-28 sm:mt-6">
        {Array.from(Array(9).keys()).map((value, index) => {
          return <TrendingTraitsItem key={index} />
        })}
      </div>
    </div>
  )
}

export default TrendingTraits
