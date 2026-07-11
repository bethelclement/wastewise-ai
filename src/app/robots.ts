import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://wastewiserai.com/sitemap.xml',
    host: 'https://wastewiserai.com',
  }
}
