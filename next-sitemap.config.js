/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://portfolio-ajay-psi.vercel.app/', // 🔁 Replace with your real domain
    generateRobotsTxt: true,            // ✅ Generate robots.txt file
    generateIndexSitemap: true,         // Optional: generate sitemap-index.xml
    sitemapSize: 5000,                  // Optional: splits into multiple files if needed
    changefreq: 'monthly',
    priority: 0.7,
}
