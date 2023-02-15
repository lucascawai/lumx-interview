import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Manrope } from '@next/font/google'
import type { AppProps } from 'next/app'

const manrope = Manrope({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
