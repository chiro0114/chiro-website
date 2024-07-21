import React from 'react'
import { AiOutlineBell } from 'react-icons/ai'

const NoticeBtn = () => {
  return (
    <div className='hidden xl:block'>
      <button className='block'>
        <AiOutlineBell className='h-7 w-7 xl:h-8 xl:w-8' />
      </button>
    </div>
  )
}

export default NoticeBtn
