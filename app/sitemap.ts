import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://portfolio-ajay-psi.vercel.app'

    // For a single page application, we only need the main page
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
    ]
}