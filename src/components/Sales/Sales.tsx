import { useState } from 'react'
import SalesGraph from './SalesGraph'
import SalesHeader from './SalesHeader'

export const rangesSales = ['24H', '7D', '30D', '90D', '6M', 'ALL']

const Sales = () => {
  const [rangeSelected, setRangeSelected] = useState(0)

  return (
    <>
      <div className="mx-4 mt-6 bg-gray-700 sm:mx-14 sm:mt-16">
        <SalesHeader rangeSelected={rangeSelected} setRangeSelected={setRangeSelected} />
      </div>
      <div className="mx-4 mt-4 bg-gray-700 sm:mx-14 sm:mt-6">
        <SalesGraph range={rangesSales[rangeSelected]} />
      </div>
    </>
  )
}

export default Sales
