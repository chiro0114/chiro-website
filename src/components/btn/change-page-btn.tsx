import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const ChangePageBtn = ({ href, isPrev }: { href: string; isPrev?: boolean }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'absolute top-1/2 -translate-y-1/2 rounded-full border',
        !isPrev && 'right-5',
        isPrev && 'left-5',
      )}
    >
      <div className='relative h-[80px] w-[80px]'>
        <span className='absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 text-white'>
          {!isPrev ? 'Next' : 'Prev'}
        </span>
      </div>
    </Link>
  )
}

export default ChangePageBtn
