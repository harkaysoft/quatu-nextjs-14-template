import Listar from '@components/(public)/Listar'

export default function Home() {
  return (
    <section className='container mx-auto px-[20px]'>
      <Listar type='productos' />
    </section>
  )
}
