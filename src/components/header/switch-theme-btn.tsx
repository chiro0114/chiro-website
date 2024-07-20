'use client'

import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'
import { ThemeContext } from '../wrapper/root-wrapper'

const SwitchThemeBtn = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) return

  const { theme, setTheme } = themeContext

  const isDark = theme === 'dark'
  return (
    <button
      onClick={() => {
        if (theme !== 'dark') {
          localStorage.setItem('theme', 'dark')
          return setTheme('dark')
        }
        localStorage.setItem('theme', 'light')
        setTheme('light')
      }}
      className='relative flex w-fit items-center rounded-full border-2 border-[#4E4E4E]'
    >
      <div
        className={twMerge(
          'absolute left-0 top-0 z-[-1] h-full w-1/2 rounded-full bg-white duration-150',
          isDark && 'translate-x-full',
        )}
      />
      <div className='px-4 py-[6px]'>
        <BsSun className={twMerge('h-5 w-5 text-black', isDark && 'text-white')} />
      </div>
      <div className='px-4 py-[6px]'>
        <BsMoon className={twMerge('h-5 w-5 text-white', isDark && 'text-black')} />
      </div>
    </button>
  )
}

export default SwitchThemeBtn
