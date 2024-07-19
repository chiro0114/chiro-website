import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'h2'>

const SiteLogo = ({ className }: Props) => {
  return (
    <h2 className={twMerge('text-2xl text-white', className)}>
      <Link href='/'>SHION TANAKA</Link>
    </h2>
  )
}

export default SiteLogo