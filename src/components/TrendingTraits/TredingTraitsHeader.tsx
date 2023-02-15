import { MouseEvent, useState } from 'react'
import Image from 'next/image'

const TrendingTraitsHeader = () => {
  const [timeSelected, setTimeSelected] = useState(0)
  const times = ['1M', '5M', '15M', '30M', '1H', '1D']

  const handleClick = (_: MouseEvent, index: number): void => {
    setTimeSelected(index)
  }
  return (
    <>
      <div className="flex flex-row justify-end">
        <div className="hidden flex-auto bg-gray-800 sm:block"></div>
        <div className="flex flex-auto content-center justify-between bg-gray-700 py-5 sm:grow sm:justify-end">
          <div className="text-xs leading-6 text-gray-600 sm:my-auto">Time:</div>
          {times.map((value, index) => {
            if (index === timeSelected) {
              return (
                <button
                  type="button"
                  key={index}
                  onClick={(e) => handleClick(e, index)}
                  className="h-9 w-16 rounded bg-gradient-to-r from-brand-gradientBegin to-brand-gradientEnd text-center text-gray-100 sm:my-auto sm:mx-1 sm:h-9"
                >
                  {value}
                </button>
              )
            }
            return (
              <button
                type="button"
                key={index}
                onClick={(e) => handleClick(e, index)}
                className="h-9 w-16 text-center text-gray-500 sm:my-auto sm:mx-1 sm:h-9"
              >
                {value}
              </button>
            )
          })}
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
    </>
  )
}

export default TrendingTraitsHeader
