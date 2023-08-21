import Image from "next/image";
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { Provider as UrqlProvider, Client } from 'urql'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <UrqlProvider value={Client}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </UrqlProvider>
    </ThemeProvider>
  )
}