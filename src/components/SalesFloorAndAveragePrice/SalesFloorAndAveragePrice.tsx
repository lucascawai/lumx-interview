import { useState } from 'react'
import SalesFloorAndAveragePriceGraph from './SalesFloorAndAveragePriceGraph'
import SalesFloorAndAveragePriceHeader from './SalesFloorAndAveragePriceHeader'

export const rangesSalesFloorAndAveragePrice = ['24H', '7D', '30D', '90D', '6M', 'ALL']

const SalesFloorAndAveragePrice = () => {
  const [rangeSelected, setRangeSelected] = useState(0)

  return (
    <>
      <SalesFloorAndAveragePriceHeader
        rangeSelected={rangeSelected}
        setRangeSelected={setRangeSelected}
      />
      <SalesFloorAndAveragePriceGraph range={rangesSalesFloorAndAveragePrice[rangeSelected]} />
    </>
  )
}

export default SalesFloorAndAveragePrice
