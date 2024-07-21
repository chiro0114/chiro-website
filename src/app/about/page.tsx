import ChangePageBtn from '@/components/btn/change-page-btn'
import PageHeading from '@/components/page-heading'
import Image from 'next/image'

export default function About() {
  const profile = [
    { title: 'Name', text: '田中 志音' },
    { title: 'Location', text: '北海道 札幌周辺' },
    { title: 'Contact', text: 'chiro.dev.work@gmail.com' },
  ]

  const businessContents = [
    { title: 'Webサイト制作事業', imagePath: '/web-site.png' },
    { title: 'Webアプリ開発事業', imagePath: '/web-app.png' },
    { title: 'スマホアプリ開発事業', imagePath: '/native-app.png' },
  ]
  return (
    <div className='mt-8'>
      <PageHeading text='About' />
      <div className='mt-8 flex flex-col items-center justify-center gap-6 xl:flex-row xl:gap-24'>
        <Image
          src='/profile-icon.png'
          width={156}
          height={156}
          alt='プロフィールアイコン'
          className='h-30 w-30 rounded-full xl:h-[156px] xl:w-[156px]'
        />
        <div className='flex flex-col gap-4'>
          {profile.map((data) => (
            <div
              key={data.title}
              className='flex font-normal text-white md:text-lg xl:text-xl'
            >
              <span className='inline-block w-24 xl:w-32'>{data.title}</span>
              <span>{data.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto mt-10 w-fit'>
        <h4 className='text-center text-xl'>Business Contents</h4>
        <div className='mb-6 mt-6 flex items-center gap-9 xl:mb-0'>
          {businessContents.map((business) => (
            <div key={business.imagePath} className='flex flex-col items-center'>
              <Image
                src={business.imagePath}
                width={100}
                height={100}
                alt={business.title}
                className='h-20 w-20 xl:h-[100px] xl:w-[100px]'
              />
              <p className='mt-3 text-center text-base font-bold md:text-lg'>
                {business.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ChangePageBtn href='/works' />
      <ChangePageBtn href='/' isPrev />
    </div>
  )
}
