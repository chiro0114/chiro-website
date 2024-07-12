import ChangePageBtn from '@/components/btn/change-page-btn'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const profile = [
    { title: 'Name', text: '田中 志音' },
    { title: 'Location', text: '北海道 札幌周辺' },
    { title: 'Contact', text: 'varichiro@gmail.com' },
  ]

  const businessContents = [
    { title: 'Webサイト制作事業', imagePath: '/web-site.png' },
    { title: 'Webアプリ開発事業', imagePath: '/web-app.png' },
    { title: 'スマホアプリ開発事業', imagePath: '/native-app.png' },
  ]
  return (
    <div className='mt-8'>
      <h3 className='title-gradient mx-auto w-fit text-[32px]'>About</h3>
      <div className='mt-8 flex items-center justify-center gap-24'>
        <Image
          src='/profile-icon.png'
          width={156}
          height={156}
          alt='プロフィールアイコン'
          className='rounded-full'
        />
        <div className='flex flex-col gap-4'>
          {profile.map((data) => (
            <div key={data.title} className='flex text-xl font-normal text-white'>
              <span className='inline-block w-32'>{data.title}</span>
              <span>{data.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto mt-16 w-fit'>
        <h4 className='text-center text-xl'>Business Contents</h4>
        <div className='mt-6 flex items-center gap-9'>
          {businessContents.map((business) => (
            <div key={business.imagePath} className='flex flex-col items-center'>
              <Image
                src={business.imagePath}
                width={100}
                height={100}
                alt={business.title}
              />
              <p className='mt-3 text-center text-lg font-bold'>{business.title}</p>
            </div>
          ))}
        </div>
      </div>
      <ChangePageBtn href='/works' />
      <ChangePageBtn href='/' isPrev />
    </div>
  )
}
