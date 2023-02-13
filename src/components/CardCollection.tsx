import Image from 'next/image'

export default function CardCollection() {
  return (
    <>
      <div className="mx-4 mt-6 bg-gray-700 sm:mx-14 sm:mt-16 sm:mb-8">
        <div className="flex flex-col content-center sm:flex-row">
          <div className="flex flex-row content-center border-b border-gray-600 sm:border-0">
            <div className="my-5 ml-3">
              <Image
                src="/bored-img.png"
                alt="BoredApe"
                width={32}
                height={32}
                className="bg-gray-700"
              />
            </div>
            <div className="my-auto ml-3 flex flex-col content-center">
              <div className="text-baseline text-bold text-gray-100">Bored Ape Yacht Club</div>
              <div className="flex flex-row">
                <div className="grow text-gray-600">0x6asdaf</div>
                <div>
                  <Image
                    src="/icn-copy.svg"
                    alt="Icon Copy"
                    width={20}
                    height={20}
                    className="bg-gray-700"
                  />
                </div>
              </div>
            </div>
            <div className="mx-3 my-auto flex grow flex-row justify-end">
              <Image
                src="/icn-monitor-list.svg"
                alt="Icon Monitor List"
                width={24}
                height={24}
                className="mx-2 bg-gray-700"
              />
              <Image
                src="/icn-opensea-list.svg"
                alt="Icon Opensea List"
                width={24}
                height={24}
                className="mx-2 bg-gray-700"
              />
              <Image
                src="/icon-etherscan-list.svg"
                alt="Icon Etherscan List"
                width={24}
                height={24}
                className="mx-2 bg-gray-700"
              />
            </div>
          </div>
          <div className="sm:mr-5 sm:flex sm:grow sm:flex-row sm:content-center sm:justify-end">
            <div className="flex flex-row justify-between">
              <div className="m-5 flex flex-col content-center justify-center">
                <div className="text-bold my-1 text-center text-sm leading-6 text-gray-500 sm:text-lg">
                  LIFETIME
                </div>
                <div className="text-bold my-1 text-center text-lg text-gray-100">453d</div>
              </div>
              <div className="m-5 flex flex-col content-center justify-center">
                <div className="text-bold my-1 text-center text-sm leading-6 text-gray-500 sm:text-lg">
                  ITEMS
                </div>
                <div className="text-bold my-1 text-center text-lg text-gray-100">10K</div>
              </div>
              <div className="m-5 flex  flex-col content-center justify-center">
                <div className="text-bold my-1 text-center text-sm leading-6 text-gray-500 sm:text-lg">
                  FLOOR
                </div>
                <div className="text-bold my-1 text-center text-lg text-gray-100">145</div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="m-5 flex flex-col content-center justify-center">
                <div className="text-bold my-1 text-center text-sm leading-6 text-gray-500 sm:text-lg">
                  ROYALTES
                </div>
                <div className="text-bold my-1 text-center text-lg text-gray-100">7,5%</div>
              </div>
              <div className="m-5 flex flex-col">
                <div className="text-bold my-1 text-center text-sm leading-6 text-gray-500 sm:text-lg">
                  VOL 24H
                </div>
                <div className="text-bold my-1 text-center text-lg text-gray-100">1.581K</div>
                <div className="flex flex-row content-center">
                  <Image
                    src="/arrow-up.svg"
                    alt="Arrow Down"
                    width={7}
                    height={12}
                    className="mx-1 bg-gray-700"
                  />
                  <div className="text-bold m-1 text-center text-sm leading-6 text-support-green sm:text-lg">
                    12,02%
                  </div>
                </div>
              </div>
              <div className="m-5 flex flex-col">
                <div className="text-bold my-1 text-center text-sm leading-6 text-gray-500 sm:text-lg">
                  VOL 7D
                </div>
                <div className="text-bold my-1 text-center text-lg text-gray-100">12.9K</div>
                <div className="flex flex-row content-center">
                  <Image
                    src="/arrow-down.svg"
                    alt="Arrow Down"
                    width={7}
                    height={12}
                    className="mx-1 bg-gray-700"
                  />
                  <div className="text-bold m-1 text-center text-sm leading-6 text-support-red sm:text-lg">
                    1,29%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
