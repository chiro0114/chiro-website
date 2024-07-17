'use client'

import React from 'react'
import ContactInput from './contact-input'
import ContactTextarea from './contact-textaret'
import { useForm } from 'react-hook-form'
import sendEmail from '../actions/send-email'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      company: '',
      mail: '',
      text: '',
    },
  })

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log(await sendEmail())
      })}
      className='mx-auto mt-8 flex w-fit flex-col gap-5'
    >
      <ContactInput
        id='name'
        label='氏名・担当者名'
        placeholder='山田 太郎'
        isRequire
        error={errors.name?.message}
        {...register('name', { required: { value: true, message: '必須項目です' } })}
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
        {...register('mail', {
          pattern: {
            value:
              /^[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9].)+[a-zA-Z]{2,}$/,
            message: 'メールの形式が正しくありません',
          },
          required: { value: true, message: '必須項目です' },
        })}
      />
      <ContactTextarea
        id='text'
        {...register('text', { required: { value: true, message: '必須項目です' } })}
        label='お問い合わせ内容'
        placeholder='ご質問・ご相談などお気軽にご連絡ください'
        error={errors.text?.message}
        isRequire
      />
      <div className='mt-4 flex justify-center'>
        <button className='block w-2/5 border border-white bg-[#ffcd2a] py-2 font-bold text-white'>
          送信する
        </button>
      </div>
    </form>
  )
}

export default ContactForm
