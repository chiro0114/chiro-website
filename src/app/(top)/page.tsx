import ChangePageBtn from '@/components/btn/change-page-btn'

export default function Top() {
  return (
    <div>
      <h2 className='absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF3962] to-[#2594C5] bg-clip-text text-center text-5xl text-transparent'>
        Welcome to My Portfolio
      </h2>
      <ChangePageBtn href='/about' />
    </div>
  )
}
