import React from 'react'

const ContactError = ({ error }: { error: string }) => {
  return <p className='ml-[208px] text-[#FF2F2F]'>{error}</p>
}

export default ContactError
