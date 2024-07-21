import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import MainWrapper from '@/components/wrapper/main-wrapper'
import { RootWrapper } from '@/components/wrapper/root-wrapper'

export const metadata: Metadata = {
  title: 'Shion Tanaka Website',
  description:
    'Webエンジニアの田中志音です。制作実績やお問い合わせなどはこのサイトからお願いします。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <RootWrapper>
        <Header />
        <MainWrapper>{children}</MainWrapper>
      </RootWrapper>
    </html>
  )
}
