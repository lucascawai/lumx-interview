import Image from 'next/image'
import Link from 'next/link'

const MenuButton = ({ imageSrc, textBottom }: { imageSrc: string; textBottom: string }) => {
  return (
    <div className="my-3 mx-auto flex h-[3.25rem] w-[3.75rem] flex-col content-center justify-center rounded-sm bg-gray-600">
      <div className="mx-auto">
        <Image src={imageSrc} alt="Explore icon" width={16} height={16} />
      </div>
      <div className="text-center text-xs text-white">{textBottom}</div>
    </div>
  )
}

const MenuLeft = () => {
  return (
    <nav className="hidden border-r border-gray-600 bg-gray-700 sm:relative sm:left-0 sm:mr-0 sm:flex sm:h-auto sm:w-20 sm:flex-col sm:content-center">
      <ul className="mx-auto">
        <li>
          <Link href="/explore" passHref className="">
            <MenuButton imageSrc="/explore icon.svg" textBottom="Explore" />
          </Link>
        </li>
        <li className="my-3 mx-auto flex h-[3.25rem] w-[3.75rem] flex-col content-center justify-center rounded-sm">
          <div className="mx-auto">
            <Image src="/live events icon.svg" alt="Live events" width={16} height={16} />
          </div>
          <div className="text-center text-xs text-gray-500">Live Events</div>
        </li>
        <li className="my-3 mx-auto flex h-[3.25rem] w-[3.75rem] flex-col content-center justify-center rounded-sm">
          <div className="mx-auto">
            <Image src="/calendar icon.svg" alt="Calendar icon" width={16} height={16} />
          </div>
          <div className="text-center text-xs text-gray-500">Calendar</div>
        </li>
        <li className="my-3 mx-auto flex h-[3.25rem] w-[3.75rem] flex-col content-center justify-center rounded-sm">
          <div className="mx-auto">
            <Image src="/auto buy icon.svg" alt="Auto buy icon" width={16} height={16} />
          </div>
          <div className="text-center text-xs text-gray-500">Auto Buy</div>
        </li>
        <li className="my-3 mx-auto flex h-[3.25rem] w-[3.75rem] flex-col content-center justify-center rounded-sm">
          <div className="mx-auto">
            <Image src="/settings icon.svg" alt="Settings icon" width={16} height={16} />
          </div>
          <div className="text-center text-xs text-gray-500">Settings</div>
        </li>
      </ul>
    </nav>
  )
}

export default MenuLeft
