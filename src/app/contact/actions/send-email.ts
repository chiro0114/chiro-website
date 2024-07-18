'use server'

import nodemailer from 'nodemailer'

export default async function sendEmail() {
  console.log(process.env.NEXT_PUBLIC_MAIL_ADDRESS)
  const transporter = nodemailer.createTransport({
    host: 'mail1030.onamae.ne.jp',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  })

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'chiro.dev.work@gmail.com', // sender address
      to: 'contact@chiro0.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error)
}
