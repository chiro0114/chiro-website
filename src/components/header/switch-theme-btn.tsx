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
      className='relative rounded-full border-2 border-black dark:border-white'
    >
      <div className='relative m-[2px] flex w-fit items-center overflow-hidden'>
        <div
          className={twMerge(
            'absolute left-0 top-0 z-[-1] h-full w-1/2 rounded-full bg-black duration-150 dark:bg-white',
            isDark && 'translate-x-full',
          )}
        />
        <div className='px-3 py-1 xl:px-4 xl:py-[6px]'>
          <BsSun
            className={twMerge(
              'h-4 w-4 text-white xl:h-5 xl:w-5 dark:text-black',
              isDark && 'text-black dark:text-white',
            )}
          />
        </div>
        <div className='px-3 py-1 xl:px-4 xl:py-[6px]'>
          <BsMoon
            className={twMerge(
              'h-4 w-4 text-black xl:h-5 xl:w-5 dark:text-white',
              isDark && 'text-white dark:text-black',
            )}
          />
        </div>
      </div>
    </button>
  )
}

export default SwitchThemeBtn
