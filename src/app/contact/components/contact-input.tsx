import Input from '@/components/form/input'
import Label from '@/components/form/label'
import React from 'react'

type Props = {
  id: string
  label: string
  placeholder: string
  type?: string
  isRequire?: boolean
}

const ContactInput = ({ id, label, placeholder, type = 'text', isRequire }: Props) => {
  return (
    <div className='flex items-center gap-12'>
      <Label htmlFor={id} isRequire={isRequire} className='w-40'>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        className='w-[400px] border border-white bg-white bg-opacity-50 px-3 py-2 text-black'
        placeholder={placeholder}
      />
    </div>
  )
}

export default ContactInput
