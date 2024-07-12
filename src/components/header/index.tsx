import Image from 'next/image'
import React from 'react'
import { AiOutlineBell } from 'react-icons/ai'
import { BsMoon, BsSun } from 'react-icons/bs'
import SwitchThemeBtn from './switch-theme-btn'
import NoticeBtn from './notice-btn'
import ProfileIcon from '../profile-icon'
import SearchBar from './search-bar'

const Header = () => {
  return (
    <header className='sticky left-0 top-0 z-50 w-full bg-[#0F0F0F] text-white'>
      <div className='flex items-center justify-between px-8 py-2'>
        <div className='flex items-center gap-6'>
          <div className='flex flex-col gap-[5px]'>
            <span className='inline-block h-[1px] w-[18px] bg-white'></span>
            <span className='inline-block h-[1px] w-[18px] bg-white'></span>
            <span className='inline-block h-[1px] w-[18px] bg-white'></span>
          </div>
          <h1 className='text-2xl'>SHION TANAKA</h1>
        </div>
        <SearchBar />
        <div className='flex items-center gap-4'>
          <SwitchThemeBtn />
          <div className='flex items-center gap-6'>
            <NoticeBtn />
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
