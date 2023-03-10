import '../styles/globals.css';
import { ThemeProvider } from 'next-themes'
import { Inter } from '@next/font/google';
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  fallback: ['arial']
});

export default function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
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
          <main className={`${inter.className}`}>
            <Component {...pageProps}/>
          </main>
      </ThemeProvider>
    </>
  )
}
