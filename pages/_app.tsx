import '../styles/globals.css'
import type { AppProps } from 'next/app';
//check if there's a login using firebase hooks

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
