import React from 'react'
import SwitchThemeBtn from './switch-theme-btn'
import NoticeBtn from './notice-btn'
import ProfileIcon from '../profile-icon'
import SearchBar from './search-bar'
import HamburgerMenu from './hamburger-menu'
import SiteLogo from '../site-logo'

const Header = () => {
  return (
    <header className='sticky left-0 top-0 z-50 w-full bg-white text-black duration-300 dark:bg-[#0F0F0F] dark:text-white'>
      <div className='flex items-center justify-between px-4 py-2 xl:px-8'>
        <div className='flex items-center gap-4 xl:gap-6'>
          <HamburgerMenu />
          <SiteLogo />
        </div>
        <SearchBar />
        <div className='flex items-center gap-4'>
          <SwitchThemeBtn />
          <div className='flex items-center gap-4 xl:gap-6'>
            <NoticeBtn />
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
