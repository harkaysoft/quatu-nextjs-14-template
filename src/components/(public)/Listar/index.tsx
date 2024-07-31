'use client'

import Productos from './Productos'

export default function Listar({ type }: { type: 'productos' | 'categorias' }) {
  return (
    <>
      {type === 'productos' && <Productos />}
      {/* {type === 'categorias' && <Categorias />} */}
    </>
  )
}
