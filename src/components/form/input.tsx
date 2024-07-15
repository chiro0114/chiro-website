'use client'

import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = {
  className?: string
} & ComponentProps<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        `touch-manipulation border-transparent bg-transparent file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-[#636363] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
        className,
      )}
    />
  )
})

Input.displayName = 'Input'

export default Input
