import { PropsWithChildren } from 'react'
import Header from './Header'
import MenuLeft from './MenuLeft'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <MenuLeft />
        <div className="flex grow flex-col">{children}</div>
      </div>
    </>
  )
}

export default Layout
