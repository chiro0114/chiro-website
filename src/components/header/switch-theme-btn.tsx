'use client'

import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

const SwitchThemeBtn = () => {
  return (
    <div className='relative flex w-fit items-center rounded-full border-2 border-[#4E4E4E]'>
      <div className='absolute z-[-1] h-full w-1/2 rounded-full bg-white' />
      <button className='px-4 py-[6px]'>
        <BsSun className='h-5 w-5 text-black' />
      </button>
      <button className='px-4 py-[6px]'>
        <BsMoon className='h-5 w-5' />
      </button>
    </div>
  )
}

export default SwitchThemeBtn
