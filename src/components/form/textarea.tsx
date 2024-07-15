'use client'

import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
} & ComponentProps<'textarea'>

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={twMerge(
          `touch-manipulation border-transparent bg-transparent file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-[#636363] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
      ></textarea>
    )
  },
)

Textarea.displayName = 'Input'

export default Textarea
