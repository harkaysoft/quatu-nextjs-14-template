import { Spinner } from '@nextui-org/spinner'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/font/Poppins-SemiBold.ttf'
})

export default function Loading() {
  return (
    <main className='min-w-screen min-h-screen'>
      <div className='flex flex-col justify-center items-center h-screen bg-light-surface dark:bg-dark-surface'>
        <section className='w-fit h-14 justify-start items-center gap-[5px] inline-flex'>
          <div className='mb-4'>
            <p
              className={`${myFont.className} self-center whitespace-nowrap text-2xl font-semibold dark:text-white`}
            >
              Harkay
              <span
                className={`${myFont.className} text-2xl text-[0.8em] font-normal dark:text-white`}
              >
                {' '}
                S O F T
              </span>
            </p>
          </div>
        </section>
        <div className='container flex flex-col items-center'>
          <Spinner color='primary' />
          <p className='text-light-onBackground dark:text-dark-onBackground mt-4'>
            Cargando página...
          </p>
        </div>
      </div>
    </main>
  )
}
