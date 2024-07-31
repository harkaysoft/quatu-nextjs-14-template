'use client'

import { ApolloWrapper } from './providers.apollo'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <ApolloWrapper>
      <NextUIProvider locale='es-ES' navigate={router.push}>
        {children}
      </NextUIProvider>
    </ApolloWrapper>
  )
}
