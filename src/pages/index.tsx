import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from '@next/font/google'
import styles from '@/styles/Dashboard.module.css'
import Navbar from '@/components/Navbar'

export default function Dashboard() {
  return (<div>
    <Navbar />
    <div className='m-2 max-w-2xl 
                    bg-gradient-to-r from-brand-gradientBegin to-brand-gradientEnd description'>
        Bored Ape Yacht Club
    </div>
  </div>
  )
}
