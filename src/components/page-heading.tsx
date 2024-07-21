import React from 'react'

const PageHeading = ({ text }: { text: string }) => {
  return (
    <h3 className='title-gradient mx-auto w-fit text-2xl md:text-3xl xl:text-[32px]'>
      {text}
    </h3>
  )
}

export default PageHeading
