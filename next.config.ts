import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Thêm khối cấu hình images ở đây
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**'
      },
      {
        // Thêm cả placehold.co để ảnh mẫu vẫn hoạt động
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
