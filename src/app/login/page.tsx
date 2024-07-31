'use client'

import { redirect } from 'next/navigation'

export default function LoginPage() {
  if (process.env.NEXT_PUBLIC_QUATU_HARKAYSOFT_LINK) {
    return redirect(process.env.NEXT_PUBLIC_QUATU_HARKAYSOFT_LINK + '/login')
  } else {
    redirect('/')
  }
}
