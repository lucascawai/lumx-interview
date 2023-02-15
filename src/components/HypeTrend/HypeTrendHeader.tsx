import { Dispatch, MouseEvent, useState } from 'react'
import Image from 'next/image'
import { rangesHypeTrend } from './HypeTrend'

const HypeTrendHeader = ({
  rangeSelected,
  setRangeSelected,
}: {
  rangeSelected: number
  setRangeSelected: Dispatch<React.SetStateAction<number>>
}) => {
  const handleClick = (_: MouseEvent, index: number): void => {
    setRangeSelected(index)
  }
  return (
    <>
      <div className="flex flex-row justify-end">
        <div className="hidden flex-auto bg-gray-800 sm:block"></div>
        <div className="flex flex-auto grow content-center justify-between bg-gray-700 py-5 pr-3 sm:ml-3 sm:justify-end sm:pr-5">
          <div className="text-xs leading-6 text-gray-600 sm:my-auto">Time:</div>
          {rangesHypeTrend.map((value, index) => {
            if (index === rangeSelected) {
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
        <div className="flex flex-row justify-between">
          <div className="flex flex-row content-baseline justify-between sm:flex-col">
            <div className="text-bold my-3 ml-3 align-middle text-lg text-gray-100 sm:my-4 sm:ml-6">
              Hype Trend
            </div>
          </div>
          <div className="my-3 ml-3 flex content-center justify-between sm:grow sm:justify-end">
            <div className="text-xs leading-6 text-gray-600 sm:my-auto">HYPER THERMOMETER:</div>
            <button
              disabled
              className=" ml-3 mr-6 flex h-8 w-32 flex-row content-center justify-evenly rounded bg-support-green/10 text-center sm:my-auto sm:h-9"
            >
              <Image
                src="/trending-up.svg"
                alt="Trending up"
                width={16}
                height={10}
                className="my-auto"
              />
              <div className="text-bold my-auto text-sm leading-6 text-support-green">
                VERY HYPED
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HypeTrendHeader
