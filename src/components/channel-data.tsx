import React from 'react'
import PageTitle from './page-title'
import Image from 'next/image'
import SwitchBtns from './btn/switch-btns'

const ChannelData = () => {
  return (
    <div className='px-4 py-3 text-black dark:text-white'>
      <PageTitle />
      <div className='mt-3 flex items-center gap-10'>
        <div className='flex items-center gap-2'>
          <div>
            <Image
              src='/profile-icon.png'
              width={48}
              height={48}
              alt='プロフィールアイコン'
              className='rounded-full'
            />
          </div>
          <div className='flex flex-col'>
            <p>Shion’s Portfolio</p>
            <div className='flex gap-1 text-xs text-[#717171]'>
              <span>チャンネル登録者数</span>
              <span>77777</span>
            </div>
          </div>
        </div>
        <div>
          <button className='rounded-full bg-black px-3 py-2 text-sm text-white dark:bg-[#F1F1F1] dark:text-black'>
            チャンネル登録
          </button>
        </div>
      </div>
      <SwitchBtns />
    </div>
  )
}

export default ChannelData
