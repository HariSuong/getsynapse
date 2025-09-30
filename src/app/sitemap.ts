import { MetadataRoute } from 'next'

// 1. Import hàm lấy tất cả bài viết từ file lib của bạn
// Lưu ý: Tên file của bạn là `lib/post.ts`, nhưng trong các file khác bạn lại import `lib/posts`.
// Tôi sẽ dùng 'lib/posts' cho nhất quán, bạn hãy chỉnh lại nếu cần nhé.
import { getAllPosts } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 2. Định nghĩa URL gốc của trang web
  const baseUrl = 'https://www.getsynapse.tech'

  // 3. Xử lý các trang tĩnh (homepage, trang blog chính, ...)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
    // Sau này có thêm trang /about, /contact thì bạn thêm vào đây
  ]

  // 4. Xử lý các trang động (lấy tất cả bài viết từ Firebase)
  const allPosts = await getAllPosts()

  const postUrls: MetadataRoute.Sitemap = allPosts.map(post => {
    return {
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: post.createdAt.toDate(),
      changeFrequency: 'yearly',
      priority: 0.7
    }
  })

  // 5. Kết hợp tất cả các trang lại và trả về
  return [...staticRoutes, ...postUrls]
}
