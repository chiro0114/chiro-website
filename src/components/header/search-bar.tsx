import React from 'react'
import Input from '../form/input'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className='flex w-3/5 max-w-[720px] items-center overflow-hidden rounded-full border border-[#d0d0d0] dark:border-[#4E4E4E]'>
      <Input className='h-10 flex-1 px-4' />
      <div className='border-l border-[#d0d0d0] bg-[#F0F0F0] px-5 py-2 dark:border-[#4E4E4E] dark:bg-[#363535]'>
        <button className='block'>
          <FiSearch className='h-6 w-6' />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
