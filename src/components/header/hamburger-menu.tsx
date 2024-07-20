'use client'

import { pagesData } from '@/constants/pages'
import React, { useState } from 'react'
import { AiOutlineLaptop } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { FiHome, FiMail } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import SiteLogo from '../site-logo'
import Link from 'next/link'

const HamburgerMenu = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  const pagesNav = pagesData.map((page) => {
    switch (page.id) {
      case 'home':
        return { Icon: FiHome, ...page }
      case 'about':
        return { Icon: BsPersonFill, ...page }
      case 'works':
        return { Icon: AiOutlineLaptop, ...page }
      case 'contact':
        return { Icon: FiMail, ...page }
      default:
        return { Icon: FiHome, ...page }
    }
  })

  return (
    <>
      <button
        onClick={() => setToggleDrawer((prev) => !prev)}
        className='flex flex-col gap-[5px]'
      >
        <span className='inline-block h-[1px] w-[18px] bg-black duration-300 dark:bg-white'></span>
        <span className='inline-block h-[1px] w-[18px] bg-black duration-300 dark:bg-white'></span>
        <span className='inline-block h-[1px] w-[18px] bg-black duration-300 dark:bg-white'></span>
      </button>
      <div
        onClick={() => setToggleDrawer(false)}
        className={twMerge(
          'pointer-events-none invisible fixed left-0 top-0 z-40 h-full w-full bg-black opacity-0 duration-200',
          toggleDrawer && 'pointer-events-auto visible opacity-30',
        )}
      />
      <div
        className={twMerge(
          'fixed left-0 top-0 z-50 h-full -translate-x-full bg-white text-black duration-200',
          toggleDrawer && 'translate-x-0',
        )}
      >
        <div className='px-8 py-3'>
          <div className='flex items-center gap-6'>
            <button
              onClick={() => setToggleDrawer((prev) => !prev)}
              className='flex flex-col gap-[5px]'
            >
              <span className='inline-block h-[1px] w-[18px] bg-black'></span>
              <span className='inline-block h-[1px] w-[18px] bg-black'></span>
              <span className='inline-block h-[1px] w-[18px] bg-black'></span>
            </button>
            <SiteLogo className='text-black' />
          </div>
          <nav className='mt-10'>
            <ul>
              {pagesNav.map((page) => (
                <li key={page.id} className='mb-4'>
                  <Link href={page.href} className='flex items-center gap-6'>
                    <page.Icon className='h-6 w-6' />
                    <p className='text-lg'>{page.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu
