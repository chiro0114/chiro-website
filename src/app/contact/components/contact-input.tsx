import Input from '@/components/form/input'
import Label from '@/components/form/label'
import React, { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import ContactError from './contact-error'

type Props = {
  label: string
  isRequire?: boolean
  error?: string
} & ComponentProps<'input'>

const ContactInput = forwardRef<HTMLInputElement, Props>(
  (
    { id, label, name, placeholder, type = 'text', isRequire, error, ...props }: Props,
    ref,
  ) => {
    return (
      <div className='mx-auto w-5/6 md:w-auto'>
        <div className='flex flex-col md:flex-row md:gap-12 xl:items-center'>
          <Label htmlFor={id} isRequire={isRequire} className='md:w-40'>
            {label}
          </Label>
          <Input
            id={id}
            type={type}
            name={name}
            className='border border-white bg-white bg-opacity-50 px-3 py-2 text-black md:w-[400px]'
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
        </div>
        {error && <ContactError error={error} />}
      </div>
    )
  },
)
ContactInput.displayName = 'ContactInput'

export default ContactInput
