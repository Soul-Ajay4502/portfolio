import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/*', '/_next/*'],
        },
        sitemap: 'https://portfolio-ajay-psi.vercel.app/sitemap.xml',
        host: 'https://portfolio-ajay-psi.vercel.app',
    }
}