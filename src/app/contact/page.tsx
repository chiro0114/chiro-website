import ChangePageBtn from '@/components/btn/change-page-btn'
import ContactForm from './components/contact-form'

export default function Contact() {
  return (
    <div className='mt-8'>
      <h3 className='title-gradient mx-auto w-fit text-[32px]'>Contact</h3>
      <ContactForm />
      <ChangePageBtn href='/works' isPrev />
    </div>
  )
}
