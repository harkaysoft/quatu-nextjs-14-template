import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const hasURL = searchParams.has('url')
    const url = hasURL
      ? searchParams.get('url')?.slice(0, 100)
      : 'https://utfs.io/f/f4bd9848-74f9-4336-b46a-35db2ae507f4-yk6o7u.webp'

    const hasName = searchParams.has('name')
    const name = hasName
      ? searchParams.get('name')?.slice(0, 100)
      : 'Nombre del Producto'

    const hasWidth = searchParams.has('width')
    const width = hasWidth ? searchParams.get('width')?.slice(0, 100) : 800

    const hasHeight = searchParams.has('height')
    const height = hasHeight ? searchParams.get('height')?.slice(0, 100) : 400

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            position: 'relative',
            backgroundColor: 'white'
          }}
        >
          <section
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '110px',
              userSelect: 'none'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
              <p style={{ transform: 'rotate(30deg)' }}>Tienda</p>
            </div>
          </section>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            <p>TIENDA</p>
            <b
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {name}
            </b>

            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img width={200} src={url} />
            </p>
          </div>
        </div>
      ),
      {
        width: Number(width),
        height: Number(height)
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Error al generar la imagen`, {
      status: 500
    })
  }
}
