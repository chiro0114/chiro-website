import { Inknut_Antiqua } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import RegenerationBar from '../regeneration-bar'

const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className='relative bg-[#1B1F26]'>
        <div className='relative mx-auto w-[80%] max-w-[1440px]'>
          <Image
            src='/main-bg.png'
            width={1792}
            height={1024}
            alt='メイン背景画像'
            className=''
          />
          <div
            className={`${inknutAntiqua.className} scrollbar-hidden absolute left-0 top-0 h-full w-full overflow-y-scroll text-white`}
          >
            {children}
          </div>
        </div>
        <RegenerationBar />
      </div>
      <div className='mx-4 mt-3'>
        <h3 className='text-3xl font-bold'>【Home】トップページ</h3>
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
            <button className='rounded-full bg-black px-3 py-2 text-sm text-white'>
              チャンネル登録
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainWrapper
