import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'

// Khởi tạo font Inter cho chữ thường
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Tạo biến CSS
  weight: ['400', '500', '600', '700']
})
// Khởi tạo font Space Grotesk cho tiêu đề
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', // Tạo biến CSS
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'SynapseAI - Blog về AI & Tự động hóa',
  description:
    'SynapseAI là blog chia sẻ kiến thức, xu hướng và ứng dụng thực tế của Trí tuệ Nhân tạo (AI) và Tự động hóa dành cho lập trình viên và doanh nghiệp Việt Nam.',
  keywords: [
    'AI',
    'Artificial Intelligence',
    'Automation',
    'Tự động hóa',
    'Next.js',
    'React',
    'Python',
    'FastAPI',
    'Chatbot',
    'SaaS',
    'SynapseAI'
  ],
  authors: [{ name: 'Nguyen Doan Ngoc Suong', url: 'https://getsynapse.tech' }],
  creator: 'SynapseAI',
  publisher: 'SynapseAI',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://getsynapse.tech',
    siteName: 'SynapseAI',
    title: 'SynapseAI - Blog về AI & Tự động hóa',
    description:
      'Cập nhật kiến thức và xu hướng mới nhất về AI, Automation, và cách ứng dụng vào sản phẩm thực tế.'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
