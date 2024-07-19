import Label from '@/components/form/label'
import Textarea from '@/components/form/textarea'
import React, { ComponentProps, forwardRef } from 'react'
import ContactError from './contact-error'

type Props = {
  label: string
  isRequire?: boolean
  error?: string
} & ComponentProps<'textarea'>

const ContactTextarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ id, name, label, placeholder, isRequire, error, ...props }: Props, ref) => {
    return (
      <div>
        <div className='items-top flex gap-12'>
          <Label htmlFor={id} isRequire={isRequire} className='w-40'>
            {label}
          </Label>
          <Textarea
            id={id}
            name={name}
            className='w-[400px] border border-white bg-white bg-opacity-50 px-3 py-2 text-black'
            rows={7}
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

export default ContactTextarea