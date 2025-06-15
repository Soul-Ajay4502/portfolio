import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://portfolio-ajay-psi.vercel.app'

    // Main pages
    const routes = [
        '',
        '#about',
        '#skills',
        '#projects',
        '#experience',
        '#contact',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}