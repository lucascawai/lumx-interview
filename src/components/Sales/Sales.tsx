import { useState } from 'react'
import SalesGraph from './SalesGraph'
import SalesHeader from './SalesHeader'

export const rangesSales = ['24H', '7D', '30D', '90D', '6M', 'ALL']

const Sales = () => {
  const [rangeSelected, setRangeSelected] = useState(0)

  return (
    <>
      <SalesHeader rangeSelected={rangeSelected} setRangeSelected={setRangeSelected} />
      <SalesGraph range={rangesSales[rangeSelected]} />
    </>
  )
}

export default Sales
