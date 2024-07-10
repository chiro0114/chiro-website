import React from 'react'
import { AiOutlineBell } from 'react-icons/ai'

const NoticeBtn = () => {
  return (
    <div>
      <button className='block'>
        <AiOutlineBell className='h-8 w-8' />
      </button>
    </div>
  )
}

export default NoticeBtn
