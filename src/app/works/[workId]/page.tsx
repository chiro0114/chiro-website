import { client } from '@/libs/client'
import { WorksType } from '@/types/works'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Work({ params }: { params: { workId: string } }) {
  const data: WorksType = await client.get({
    endpoint: 'works',
  })

  const works = data.contents

  const work = works.find((work) => work.id === params.workId)

  if (!work) return redirect('/404')

  const wrapText = work.text.split('\n').filter((text) => text)

  return (
    <div className='m-6 md:mx-20 md:mt-16'>
      <Link href='/works' className='inline-block py-3' rel='noopener noreferrer'>
        <Image src='/back-arrow.png' width={52} height={5} alt='実績一覧へ戻る' />
      </Link>
      <div className='md:mx-12'>
        <div className='mt-6 flex flex-col items-start gap-4 md:mt-8 md:flex-row md:gap-8'>
          <div className='flex-1'>
            <Link href={work.url} target='_blank'>
              <Image
                src={work.imagePath.url}
                width={work.imagePath.width}
                height={work.imagePath.height}
                alt={work.serviceName}
              />
            </Link>
          </div>
          <div className='md:basis-96'>
            <p>{work.client ? `${work.client} 様` : '自主制作'} </p>
            <h2 className='mt-1 text-xl'>{work.serviceName}</h2>
            <div className='mt-4 md:mt-6'>
              <p className='text-lg'>使用技術</p>
              <p className='mt-1 flex flex-wrap gap-2'>
                {work.usedTech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </p>
            </div>
            <div className='mt-4 md:mt-6'>
              <p className='text-lg'>担当</p>
              <p className='mt-1 flex flex-wrap gap-2'>
                {work.inCharge.map((e) => (
                  <span key={e}>{e}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className='mt-6 md:mt-6'>
          {wrapText.map((text) => (
            <p key={text} className='mb-3'>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
