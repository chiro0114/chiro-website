import ChangePageBtn from '@/components/btn/change-page-btn'
import ContactForm from './components/contact-form'
import PageHeading from '@/components/page-heading'

export default function Contact() {
  return (
    <div className='my-8'>
      <PageHeading text='Contact' />
      <ContactForm />
      <ChangePageBtn href='/works' isPrev />
    </div>
  )
}
