'use client'

import React, { useState } from 'react'
import ContactInput from './contact-input'
import ContactTextarea from './contact-textaret'
import { useForm } from 'react-hook-form'
import sendEmail from '../actions/send-email'
import { ContactFormSchema, ContactFormType } from '@/validations/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFormStatus } from 'react-dom'
import SpinLoader from '@/components/loader/spin-loader'

const ContactForm = () => {
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    defaultValues: {
      name: '',
      company: '',
      mail: '',
      text: '',
    },
    resolver: zodResolver(ContactFormSchema),
  })

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          setIsPending(true)
          const result = await sendEmail({ formData: data })
          if (result) {
            setError(result.error)
          }
          setIsPending(false)
        })}
        className='mx-auto mt-8 flex w-fit flex-col gap-5'
      >
        {error && <p className='text-mainRed text-center text-lg'>{error}</p>}
        <ContactInput
          id='name'
          label='氏名・担当者名'
          placeholder='山田 太郎'
          isRequire
          error={errors.name?.message}
          {...register('name')}
        />
        <ContactInput
          id='company'
          label='会社名・部署名'
          placeholder='〇〇株式会社　営業部'
          {...register('company')}
        />
        <ContactInput
          id='mail'
          label='メールアドレス'
          type='email'
          placeholder='sample@sample.com'
          error={errors.mail?.message}
          isRequire
          {...register('mail')}
        />
        <ContactTextarea
          id='text'
          {...register('text')}
          label='お問い合わせ内容'
          placeholder='ご質問・ご相談などお気軽にご連絡ください'
          error={errors.text?.message}
          isRequire
        />
        <SubmitBtn />
      </form>
      {isPending && <SpinLoader />}
    </>
  )
}

export const SubmitBtn = () => {
  return (
    <div className='mt-4 flex justify-center'>
      <button
        type='submit'
        className='block w-2/5 border border-white bg-[#ffcd2a] py-2 font-bold text-white'
      >
        送信する
      </button>
    </div>
  )
}

export default ContactForm
