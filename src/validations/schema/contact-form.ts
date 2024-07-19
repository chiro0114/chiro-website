import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string({ required_error: '入力必須項目です' })
    .min(1, { message: '入力必須項目です' })
    .max(100, { message: '100文字以内で入力してください' }),
  company: z.string().max(100, { message: '100文字以内で入力してください' }),
  mail: z
    .string({ required_error: '入力必須項目です' })
    .min(1, { message: '入力必須項目です' })
    .max(255, { message: '225文字以内で入力してください' })
    .email({ message: '不正なメールアドレスす' }),
  text: z
    .string({ required_error: '入力必須項目です' })
    .min(1, { message: '入力必須項目です' })
    .max(500, { message: '5000文字以内で入力してください' }),
})

export type ContactFormType = z.infer<typeof ContactFormSchema>
