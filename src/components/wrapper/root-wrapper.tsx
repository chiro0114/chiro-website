'use client'

import { Noto_Sans_JP } from 'next/font/google'
import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

// コンテキストの型を定義
type ThemeContextType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light')
  return (
    <body className={`${notoSansJp.className} ${theme === 'dark' && 'dark'}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className='dark:bg-mainBlack bg-white xl:min-h-screen'>{children}</div>
      </ThemeContext.Provider>
    </body>
  )
}

export { RootWrapper, ThemeContext }
