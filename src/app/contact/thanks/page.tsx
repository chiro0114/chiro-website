import Link from 'next/link'

export default function ThanksContact() {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-10'>
      <h2 className='text-center text-xl font-bold'>
        お問い合わせありがとうございます。 <br />
        ご返信まで少々お待ちください。
      </h2>
      <div>
        <Link
          href='/'
          className='block border border-white bg-[#ffcd2a] px-5 py-2 font-bold text-white'
        >
          ホームへ戻る
        </Link>
      </div>
    </div>
  )
}
