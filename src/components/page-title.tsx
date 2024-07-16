'use client'

import { pagesData } from '@/constants/pages'
import { usePathname } from 'next/navigation'

const PageTitle = () => {
  const pathname = usePathname()

  const pageIndex = pagesData.findIndex((page) => page.href === pathname)

  return (
    <h3 className='text-3xl font-bold'>
      {pagesData[pageIndex] ? pagesData[pageIndex].text : 'Chiro’s Website'}
    </h3>
  )
}

export default PageTitle
