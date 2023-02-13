import Image from 'next/image'
import styles from '@/styles/Dashboard.module.css'
import { useState } from 'react'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <nav className="flex w-full content-center justify-between border-b border-gray-600 bg-gray-700 sm:relative">
        <div className="order-1 flex w-full flex-row">
          <div className="sm:wx-20 sm:wy-18 sm:hx-20 sm:hy-18 flex h-20 w-20 content-center justify-center border-gray-600 sm:border-r">
            <Image src="/logo-seamore.svg" alt="Logo Seamore" width={24} height={24} />
          </div>
          <div className="order-3 my-auto mx-8 w-96 rounded-sm border-2 border-gray-600 sm:order-2">
            <div className="flex flex-row">
              <Image
                src="/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="bg-gray-800"
              />
              <input
                placeholder="Search collections"
                className="h-14 grow bg-gray-800 text-gray-100 caret-gray-100 placeholder:text-gray-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="order-2 my-auto flex flex-row content-baseline sm:order-3 sm:mx-10">
            <div className="text-bold mx-1 text-lg text-gray-100">71</div>
            <div className="text-bold mx-1 text-lg text-gray-600">GWEI</div>
          </div>
          <div className="order-4 my-auto hidden sm:mx-10">
            <div className="text-bold text-lg text-gray-600 ">|</div>
          </div>
          <div className="order-5 my-auto hidden sm:mx-10">
            <div className="text-bold text-sm text-gray-100 ">Hi, someone</div>
          </div>
          <div className="order-6 mr-2 flex grow items-center justify-end sm:hidden">
            <button onClick={toggleExpanded}>
              {isExpanded ? (
                <Image src="/menu-2.svg" alt="Menu 2" width={20} height={20} className="" />
              ) : (
                <Image src="/menu.svg" alt="Menu" width={20} height={20} className="" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
