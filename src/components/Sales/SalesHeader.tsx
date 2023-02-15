import { Dispatch, MouseEvent, PropsWithChildren } from 'react'
import { rangesSales } from './Sales'

const ContentSalesHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-4 mt-6 bg-gray-700 sm:mx-14 sm:mt-16">
      <div className="flex flex-col sm:flex-row">{children}</div>
    </div>
  )
}
const ContentTitleSalesHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-row content-baseline justify-between sm:flex-col">
      <div className="text-bold ml-3 mt-3 align-middle text-lg text-gray-100 sm:mt-6 sm:ml-6">
        {title}
      </div>
      <div className="text-bold mr-3 mt-3 align-middle text-sm text-gray-500 sm:ml-6 sm:mb-6">
        {subtitle}
      </div>
    </div>
  )
}

const SalesHeader = ({
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
    <ContentSalesHeader>
      <ContentTitleSalesHeader title={'Sales'} subtitle={'Showing 2300 sales'} />
      <div className="my-5 ml-3 mr-3 flex content-center justify-between sm:mr-5 sm:grow sm:justify-end">
        <div className="text-xs leading-6 text-gray-600 sm:my-auto">Time:</div>
        {rangesSales.map((value, index) => {
          if (index === rangeSelected) {
            return (
              <button
                type="button"
                key={index}
                onClick={(e) => handleClick(e, index)}
                className="h-9 w-16 rounded bg-gray-600 text-center text-gray-100 sm:my-auto sm:mx-1 sm:h-9"
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
    </ContentSalesHeader>
  )
}

export default SalesHeader
