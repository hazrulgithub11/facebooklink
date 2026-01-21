import { prisma } from '@/lib/prisma'
import HomeClient from './HomeClient'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  })

  return <HomeClient initialPosts={posts} />
}
