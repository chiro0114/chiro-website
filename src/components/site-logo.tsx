import { Spectral } from 'next/font/google'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'h2'>

const spectral = Spectral({ subsets: ['latin'], weight: '700' })

const SiteLogo = ({ className }: Props) => {
  return (
    <h2 className={twMerge(`${spectral.className} text-lg xl:text-2xl`, className)}>
      <Link href='/'>SHION TANAKA</Link>
    </h2>
  )
}

export default SiteLogo
