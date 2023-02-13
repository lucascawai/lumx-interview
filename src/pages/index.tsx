import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from '@next/font/google'
import styles from '@/styles/Dashboard.module.css'
import Header from '@/components/Header'
import MenuLeft from '@/components/MenuLeft'
import CardCollection from '@/components/CardCollection'

export default function Dashboard() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-row">
        <MenuLeft />
        <div className="flex grow flex-col">
          <CardCollection />
        </div>
      </div>
    </div>
  )
}
