'use client'

import { pagesData } from '@/constants/pages'
import { usePathname } from 'next/navigation'
import React from 'react'

const RegenerationBar = () => {
  const pathname = usePathname()

  const pageIndex = pagesData.findIndex((page) => page.href === pathname)

  return (
    <div className='absolute bottom-0 left-0 z-10 h-2 w-full bg-[#D9D9D9]'>
      <div
        style={{ width: `${((pageIndex + 1) / pagesData.length) * 100}%` }}
        className='bg-mainRed h-full'
      />
    </div>
  )
}

export default RegenerationBar
