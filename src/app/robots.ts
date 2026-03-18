import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://isiolocityfc.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/'],
        disallow: '/api/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
