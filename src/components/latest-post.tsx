import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts' // 1. Import hàm lấy tất cả bài viết từ lib/posts.ts

export async function LatestPosts() {
  // 3. Gọi hàm để lấy TẤT CẢ bài viết từ Firebase
  const allPosts = await getAllPosts()

  // 4. Chỉ lấy 3 bài viết mới nhất để hiển thị
  const latestPosts = allPosts.slice(0, 3)

  return (
    <section className='py-16 md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-4 text-center mb-12'>
          <h2 className='font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Khám phá AI & Tự động hóa
          </h2>
          <p className='font-body max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Cập nhật những kiến thức, xu hướng và hướng dẫn ứng dụng AI thực tế,
            giúp bạn tối ưu công việc và tạo ra giá trị mới
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {latestPosts.map(post => (
            <Card
              key={post.id}
              className='group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1'>
              <CardHeader>
                <CardTitle className='text-lg group-hover:text-primary transition-colors font-heading'>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className='text-pretty'>
                  {post.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {/* {post.tags.map(tag => (
                    <Badge key={tag} variant='secondary' className='text-xs'>
                      {tag}
                    </Badge>
                  ))} */}
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/posts/${post.slug}`}
                  className='inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors group/link'>
                  Xem thêm
                  <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1' />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
