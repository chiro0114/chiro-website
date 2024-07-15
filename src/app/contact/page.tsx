import ChangePageBtn from '@/components/btn/change-page-btn'
import ContactInput from './components/contact-input'
import Textarea from '@/components/form/textarea'
import ContactTextarea from './components/contact-textaret'

export default function Contact() {
  return (
    <div className='mt-8'>
      <h3 className='title-gradient mx-auto w-fit text-[32px]'>Contact</h3>
      <form className='mx-auto mt-14 flex w-fit flex-col gap-5'>
        <ContactInput
          id='name'
          label='氏名・担当者名'
          placeholder='山田 太郎'
          isRequire
        />
        <ContactInput
          id='company'
          label='会社名・部署名'
          placeholder='〇〇株式会社　営業部'
        />
        <ContactInput
          id='mail'
          label='メールアドレス'
          type='email'
          placeholder='sample@sample.com'
          isRequire
        />
        <ContactTextarea
          id='text'
          label='お問い合わせ内容'
          placeholder='ご質問・ご相談などお気軽にご連絡ください'
          isRequire
        />
      </form>
      <ChangePageBtn href='/works' isPrev />
    </div>
  )
}
