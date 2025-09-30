import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Trỏ đến sitemap chính xác của bạn
    sitemap: 'https://www.getsynapse.tech/sitemap.xml',
  }
}