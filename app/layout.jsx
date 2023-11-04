
import './globals.css'

export const metadata = {
  title: 'Husam Asaad',
  description: 'Freelancer, Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-main-bg'>{children}</body>
    </html>
  )
}
