'use client'

import { pagesData } from '@/constants/pages'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const SwitchBtns = () => {
  const params = usePathname()
  const currentPageIndex = pagesData.findIndex((page) => page.href === params)

  if (currentPageIndex === -1) return
  const nextPage = pagesData[currentPageIndex + 1]
  const prevPage = pagesData[currentPageIndex - 1]

  return (
    <div className='mt-3 flex items-center justify-between xl:hidden'>
      <div>{prevPage && <SwitchBtn href={prevPage.href} text='Prev' />}</div>
      <div>{nextPage && <SwitchBtn href={nextPage.href} text='Next' />}</div>
    </div>
  )
}

const SwitchBtn = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} className={twMerge('block rounded-full border border-black')}>
      <div className='relative h-[60px] w-[60px]'>
        <span className='absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 text-black'>
          {text}
        </span>
      </div>
    </Link>
  )
}

export default SwitchBtns
