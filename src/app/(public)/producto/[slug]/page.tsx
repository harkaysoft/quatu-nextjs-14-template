import Detalle from '@components/(public)/Detalle'

export default function Page({ params }: { params: { slug: number } }) {
  return (
    <>
      <Detalle type='productos' slug={params.slug} />
    </>
  )
}
