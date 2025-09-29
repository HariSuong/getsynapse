
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.getsynapse.tech/',
  generateRobotsTxt: true, // tự động tạo robots.txt
  sitemapSize: 5000, // nếu >5000 URL thì nó sẽ chia file
  changefreq: 'daily',
  priority: 0.7,
}
