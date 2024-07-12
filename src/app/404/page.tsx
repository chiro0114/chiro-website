import ChangePageBtn from '@/components/btn/change-page-btn'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center'>
      <p className='text-3xl'>404 Not Found</p>
      <p className='mt-4 text-2xl'> お探しのページは見つかりませんでした</p>
      <div className='mx-auto mt-5 w-fit border border-white duration-100 hover:bg-white hover:bg-opacity-20'>
        <Link href='/' className='block px-6 py-3 text-xl'>
          ホームへ戻る
        </Link>
      </div>
    </div>
  )
}
