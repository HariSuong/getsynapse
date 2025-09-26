import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { format } from 'date-fns'
// Quan trọng: Chỉ import hàm getPostBySlug, không cần getAllPosts ở đây nữa
import { getPostBySlug } from '@/lib/posts'
import Markdown from 'markdown-it'
import { Metadata } from 'next'

// --- BẮT ĐẦU PHẦN METADATA ---

// 2. Định nghĩa props cho hàm generateMetadata
type Props = {
  params: { slug: string }
}

// 3. Hàm generateMetadata để tạo meta động cho mỗi bài viết
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  // Nếu không tìm thấy bài viết, trả về metadata mặc định hoặc trang 404
  if (!post) {
    return {
      title: 'Không tìm thấy bài viết',
      description: 'Bài viết bạn đang tìm kiếm không tồn tại.'
    }
  }

  // Trả về đối tượng metadata động
  return {
    title: `${post.title} | SynapseAI Blog`, // Tiêu đề hiển thị trên tab trình duyệt và Google
    description: post.desc, // Mô tả ngắn gọn hiển thị dưới tiêu đề trên Google

    // Open Graph Metadata: Dùng để hiển thị khi chia sẻ link trên mạng xã hội (Facebook, Zalo...)
    openGraph: {
      title: post.title,
      description: post.desc,
      type: 'article',
      url: `https://getsynapse.tech/posts/${post.slug}`, // <-- THAY BẰNG TÊN MIỀN CỦA BẠN
      images: [
        {
          url: post.featuredImage, // Lấy ảnh bìa làm ảnh đại diện khi chia sẻ
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  }
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  // Dùng hàm getPostBySlug hiệu quả từ lib/posts.ts
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Khởi tạo trình chuyển đổi Markdown trên server
  const md = new Markdown({
    html: true, // Cho phép các thẻ HTML trong Markdown
    linkify: true, // Tự động chuyển link text thành thẻ <a>
    typographer: true // Bật các quy tắc thay thế thông minh
  })

  // Chuyển đổi content từ Markdown sang HTML
  const htmlContent = md.render(post.content)

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <Header />
      <main className='flex-1'>
        <article className='container relative mx-auto max-w-3xl py-12 px-4'>
          <header className='mb-8 text-center'>
            {/* <div className='mb-4 flex flex-wrap justify-center gap-2'>
              {post.tags.map(tag => (
                <Badge key={tag} variant='secondary'>
                  {tag}
                </Badge>
              ))}
            </div> */}
            <h1 className='text-4xl font-heading font-extrabold tracking-tight leading-normal lg:text-5xl'>
              {post.title}
            </h1>
            <p className='mt-4 text-muted-foreground text-sm italic'>
              {/* Tạm thời hiển thị authorId, sau này sẽ lấy tên tác giả */}
              Ngày đăng: {format(post.createdAt.toDate(), 'dd-MM-yyyy')}
            </p>
          </header>

          <div className='relative mb-8 h-auto w-full overflow-hidden rounded-lg'>
            <img
              src={post.featuredImage}
              alt={post.title}
              width={1200}
              height={600}
              className='h-full w-full object-cover'
            />
          </div>

          {post.desc && (
            <blockquote className='mt-8 border-l-4 border-primary pl-6 italic text-muted-foreground'>
              <p className='text-xl leading-relaxed'>{post.desc}</p>
            </blockquote>
          )}

          <div
            className='prose prose-invert mx-auto max-w-none prose-p:text-lg prose-headings:text-foreground prose-a:text-primary'
            // Truyền nội dung đã được chuyển đổi vào đây
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* <section className='mt-16'>
            <Comments postId={post.id} />
          </section> */}
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default PostPage
