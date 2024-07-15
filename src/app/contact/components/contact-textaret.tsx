import Label from '@/components/form/label'
import Textarea from '@/components/form/textarea'
import React from 'react'

type Props = {
  id: string
  label: string
  placeholder: string
  isRequire?: boolean
}

const ContactTextarea = ({ id, label, placeholder, isRequire }: Props) => {
  return (
    <div className='items-top flex gap-12'>
      <Label htmlFor={id} isRequire={isRequire} className='w-40'>
        {label}
      </Label>
      <Textarea
        id={id}
        className='w-[400px] border border-white bg-white bg-opacity-50 px-3 py-2 text-black'
        rows={7}
        placeholder={placeholder}
      />
    </div>
  )
}

export default ContactTextarea
