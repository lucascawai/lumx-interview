import SalesGraph from './SalesGraph'

const Sales = () => {
  return (
    <>
      <div className="mx-4 mt-6 bg-gray-700 sm:mx-14 sm:mt-16">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-row content-baseline justify-between sm:flex-col">
            <div className="text-bold ml-3 mt-3 align-middle text-lg text-gray-100 sm:mt-6 sm:ml-6">
              Sales
            </div>
            <div className="text-bold mr-3 mt-3 align-middle text-sm text-gray-500 sm:ml-6 sm:mb-6">
              Showing 2400 sales
            </div>
          </div>
          <div className="my-5 ml-3 flex content-center justify-between sm:grow sm:justify-end">
            <div className="text-xs leading-6 text-gray-600 sm:my-auto">Time:</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">24H</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">7D</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">30D</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">90D</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">6M</div>
            <div className="text-center sm:my-auto sm:mx-1 sm:h-9">ALL</div>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-4 bg-gray-700 sm:mx-14 sm:mt-6">
        <SalesGraph />
      </div>
    </>
  )
}

export default Sales
