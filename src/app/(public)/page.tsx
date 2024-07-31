'use client'

import Listar from '@components/(public)/Listar'

export default function Home() {
  return (
    <section>
      <div className='container mx-auto px-[20px]'>
        <p className='text-light-onPrimary font-bold'>Tienda</p>
        <Listar type='productos' />
      </div>
    </section>
  )
}
