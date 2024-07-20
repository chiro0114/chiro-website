'use client'

import dynamic from 'next/dynamic'
import { Noto_Sans_JP } from 'next/font/google'
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

// コンテキストの型を定義
type ThemeContextType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme)
    }
  }, [])
  return (
    <body className={`${notoSansJp.className} ${theme === 'dark' && 'dark'}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </body>
  )
}

export { RootWrapper, ThemeContext }
