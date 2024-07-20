'use server'

import { ContactFormSchema, ContactFormType } from '@/validations/schema'
import { redirect } from 'next/navigation'
import nodemailer from 'nodemailer'

export default async function sendEmail({ formData }: { formData: ContactFormType }) {
  const transporter = nodemailer.createTransport({
    host: 'mail1030.onamae.ne.jp',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASS,
    },
  })

  const parsed = ContactFormSchema.safeParse(formData)
  if (!parsed.success)
    return { error: '予期せぬエラーが発生しました。再度お試しください。' }
  // send mail with defined transport object
  await transporter.sendMail({
    from: formData.mail,
    to: 'contact@chiro0.com',
    subject: 'お問い合わせ内容',
    html: `<p>${formData.company}</p>
            <p>${formData.text}</p>
      `,
  })

  redirect('/contact/thanks')
}
