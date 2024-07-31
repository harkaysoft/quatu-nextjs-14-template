import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Agregar y cambiar a páginas de su preferencia.
    {
      url: 'https://quatu.xyz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
  ]
}
