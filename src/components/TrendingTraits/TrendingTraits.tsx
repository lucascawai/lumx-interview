import TrendingTraitsItem from './TrendingTraitsItem'
import TrendingTraitsHeader from './TredingTraitsHeader'

const TrendingTraits = () => {
  return (
    <div className="flex-auto sm:ml-8">
      <TrendingTraitsHeader />
      <div className="mt-4 mb-10 bg-gray-700 sm:mb-28 sm:mt-6">
        {Array.from(Array(9).keys()).map((value, index) => {
          return <TrendingTraitsItem key={index} />
        })}
      </div>
    </div>
  )
}

export default TrendingTraits
