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
    <div className='mx-5 my-8 md:mx-0'>
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
      <div className='mx-auto mt-14 w-fit'>
        <h4 className='text-center text-2xl'>Profile</h4>
        <div className='mt-6'>
          <p className='text-xl leading-loose'>
            北海道生まれ、北海道育ち
            <br />
            小学生の頃からパソコンに興味があり、高校在学中に独学でWeb開発を学ぶ。
            <br />
            高校卒業後 LeapIn株式会社に就職。
            <br />
            入社後はフロントエンドエンジニアとして要件定義や実装、テストなど多岐に渡る業務を経験。
            <br />
            Web開発以外にWebサイト制作、Webマーケティング、SNS運用なども経験。
            <br />
            LeapIn株式会社に2年従事した後、北海道へ戻り現在に至る。
          </p>
        </div>
      </div>
      <div className='mx-auto mt-14 w-fit'>
        <h4 className='text-center text-2xl'>Business Contents</h4>
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
