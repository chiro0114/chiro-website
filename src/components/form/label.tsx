import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  isRequire?: boolean
  children: React.ReactNode
} & ComponentProps<'label'>

const Label = ({ isRequire, children, className, htmlFor }: Props) => {
  return (
    <label htmlFor={htmlFor} className={twMerge('text-lg', className)}>
      {children}
      {isRequire && <span className='text-mainRed'>*</span>}
    </label>
  )
}

export default Label
