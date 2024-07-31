import Header from '@components/(public)/Header'
import Footer from '@components/(public)/Footer'
import { Suspense } from 'react'
import Loading from '../loading'

export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </main>
  )
}
