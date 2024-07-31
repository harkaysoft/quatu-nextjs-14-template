import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Plantilla para tiendas de quaTu',
    short_name: 'Plantilla para tiendas',
    description:
      'Plantilla para tiendas de quaTu realizada por @jhangmez de HarkaySoft',
    start_url: '/',
    display: 'standalone',
    background_color: '#FCF8FE',
    theme_color: '#000022',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '128x128',
        type: 'image/x-icon'
      }
    ]
  }
}
