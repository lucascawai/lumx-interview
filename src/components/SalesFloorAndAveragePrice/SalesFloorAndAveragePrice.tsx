import { useState } from 'react'
import SalesFloorAndAveragePriceGraph from './SalesFloorAndAveragePriceGraph'
import SalesFloorAndAveragePriceHeader from './SalesFloorAndAveragePriceHeader'

export const rangesSalesFloorAndAveragePrice = ['24H', '7D', '30D', '90D', '6M', 'ALL']

const SalesFloorAndAveragePrice = () => {
  const [rangeSelected, setRangeSelected] = useState(0)

  return (
    <>
      <div className="mx-4 mt-6 bg-gray-700 sm:mx-14 sm:mt-16">
        <SalesFloorAndAveragePriceHeader
          rangeSelected={rangeSelected}
          setRangeSelected={setRangeSelected}
        />
      </div>
      <div className="mx-4 mt-4 bg-gray-700 sm:mx-14 sm:mt-6">
        <SalesFloorAndAveragePriceGraph range={rangesSalesFloorAndAveragePrice[rangeSelected]} />
      </div>
    </>
  )
}

export default SalesFloorAndAveragePrice
