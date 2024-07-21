import ChangePageBtn from '@/components/btn/change-page-btn'

export default function Top() {
  return (
    <div>
      <h2 className='title-gradient absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-2xl xl:text-5xl'>
        Welcome to My Portfolio
      </h2>
      <ChangePageBtn href='/about' />
    </div>
  )
}
