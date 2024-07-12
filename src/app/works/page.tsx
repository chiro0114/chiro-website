import ChangePageBtn from '@/components/btn/change-page-btn'
import { client } from '@/libs/client'
import { WorksType } from '@/types/works'
import Image from 'next/image'
import Link from 'next/link'

export default async function Works() {
  const data: WorksType = await client.get({
    endpoint: 'works',
  })

  const works = data.contents

  return (
    <div className='mt-8'>
      <h3 className='title-gradient mx-auto w-fit text-[32px]'>Works</h3>
      <div className='mx-auto mt-10 grid w-4/5 grid-cols-3 gap-8'>
        {works.map((work) => (
          <div key={work.id}>
            <Link href={`works/${work.id}`}>
              <Image
                src={work.imagePath.url}
                width={295}
                height={270}
                alt={work.id}
                className='w-full'
              />
              <p className='mt-1 text-sm'>
                {work.client ? `${work.client} 様` : '自主制作'}
              </p>
              <p className='mt-1'>{work.serviceName}</p>
            </Link>
          </div>
        ))}
        {works.map((work) => (
          <div key={work.id}>
            <Link href={`works/${work.id}`}>
              <Image
                src={work.imagePath.url}
                width={295}
                height={270}
                alt={work.id}
                className='w-full'
              />
              <p className='mt-1 text-sm'>
                {work.client ? `${work.client} 様` : '自主制作'}
              </p>
              <p className='mt-1'>{work.serviceName}</p>
            </Link>
          </div>
        ))}
      </div>
      <ChangePageBtn href='/contact' />
      <ChangePageBtn href='/about' isPrev />
    </div>
  )
}
