import ChangePageBtn from '@/components/btn/change-page-btn'
import PageHeading from '@/components/page-heading'
import { client } from '@/libs/client'
import { WorksType } from '@/types/works'
import { revalidatePath } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'

export default async function Works() {
  revalidatePath('/works', 'page')
  const data: WorksType = await client.get({
    endpoint: 'works',
  })

  const works = data.contents

  return (
    <div className='mt-8'>
      <PageHeading text='Works' />
      <div className='mt-10 grid w-full grid-cols-2 gap-8 px-4 md:mx-auto md:w-4/5 md:grid-cols-3 md:p-0'>
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
