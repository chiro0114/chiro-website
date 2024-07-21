import React from 'react'

const ContactError = ({ error }: { error: string }) => {
  return <p className='text-mainRed w-full md:ml-[208px]'>{error}</p>
}

export default ContactError
