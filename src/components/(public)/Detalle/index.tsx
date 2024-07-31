'use client'

import Productos from './Productos'

export default function Detalle({
  type,
  slug
}: {
  type: 'productos' | 'categorias' | 'precios'
  slug?: number
}) {
  return (
    <>
      {type === 'productos' && <Productos slug={Number(slug)} />}
      {/* {type === 'categorias' && <Categorias />} */}
    </>
  )
}
