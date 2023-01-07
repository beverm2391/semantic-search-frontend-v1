import '../styles/globals.css';
import { ThemeProvider } from 'next-themes'
import { Inter } from '@next/font/google';
import { GeistProvider, CssBaseline } from '@geist-ui/core'

const inter = Inter({
  subsets: ['latin'],
  fallback: ['arial']
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
        :root {
          --inter-font: ${inter.style.fontFamily};
        }
      `}
      </style>
      <ThemeProvider attribute='class'>
        <GeistProvider>
          <CssBaseline />
          <main className={`${inter.className}`}>
            <Component {...pageProps} />
          </main>
        </GeistProvider>
      </ThemeProvider>
    </>
  )
}
