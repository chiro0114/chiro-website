import Image from 'next/image'
import React from 'react'

const ProfileIcon = () => {
  return (
    <div className='overflow-hidden rounded-full'>
      <Image src='/profile-icon.png' alt='Chiroアイコン' width={32} height={32} />
    </div>
  )
}

export default ProfileIcon
