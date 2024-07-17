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
      <div>
        <div className='flex items-center gap-12'>
          <Label htmlFor={id} isRequire={isRequire} className='w-40'>
            {label}
          </Label>
          <Input
            id={id}
            type={type}
            name={name}
            className='w-[400px] border border-white bg-white bg-opacity-50 px-3 py-2 text-black'
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
