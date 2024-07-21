'use client'

import { Inknut_Antiqua } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import RegenerationBar from '../regeneration-bar'
import PageTitle from '../page-title'
import ChannelData from '../channel-data'

const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex h-[calc(100vh-48px)] flex-col xl:h-[calc(100vh-58px)]'>
      <div className='relative flex-1 bg-[#1B1F26]'>
        <div className="relative mx-auto h-full bg-[url('/main-bg.png')] bg-cover bg-center xl:w-4/5 xl:min-w-[1280px] xl:max-w-[1440px]">
          {/* <Image
            src='/main-bg.png'
            width={1792}
            height={1024}
            alt='メイン背景画像'
            className='hidden xl:block'
          /> */}
          {/* <Image
            src='/main-bg-sp.png'
            width={517}
            height={920}
            alt='メイン背景画像'
            className='block w-full xl:hidden'
          /> */}
          <div
            className={`${inknutAntiqua.className} scrollbar-hidden absolute left-0 top-0 h-full w-full overflow-y-scroll text-white`}
          >
            {children}
          </div>
        </div>
        <RegenerationBar />
      </div>
      <ChannelData />
    </main>
  )
}

export default MainWrapper
