import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - List all saved posts
export async function GET() {
  try {
    const savedPosts = await prisma.savedPost.findMany({
      orderBy: { savedAt: 'desc' },
    })
    
    // Get the actual post details for each saved post
    const posts = await Promise.all(
      savedPosts.map(async (saved) => {
        const post = await prisma.post.findUnique({
          where: { id: saved.postId },
        })
        return post ? { ...post, savedId: saved.id, savedAt: saved.savedAt } : null
      })
    )
    
    // Filter out any null posts (in case a post was deleted)
    const validPosts = posts.filter(post => post !== null)
    
    return NextResponse.json(validPosts)
  } catch (error) {
    console.error('Error fetching saved posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch saved posts' },
      { status: 500 }
    )
  }
}

// POST - Save a post
export async function POST(req: NextRequest) {
  try {
    const { postId } = await req.json()
    
    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }
    
    // Check if post exists
    const post = await prisma.post.findUnique({
      where: { id: postId },
    })
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }
    
    // Check if already saved
    const existingSaved = await prisma.savedPost.findFirst({
      where: { postId },
    })
    
    if (existingSaved) {
      return NextResponse.json(
        { error: 'Post already saved' },
        { status: 400 }
      )
    }
    
    // Create saved post
    const savedPost = await prisma.savedPost.create({
      data: { postId },
    })
    
    return NextResponse.json(savedPost)
  } catch (error) {
    console.error('Error saving post:', error)
    return NextResponse.json(
      { error: 'Failed to save post' },
      { status: 500 }
    )
  }
}

// DELETE - Unsave a post
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const postId = searchParams.get('postId')
    
    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }
    
    // Find and delete the saved post
    const savedPost = await prisma.savedPost.findFirst({
      where: { postId },
    })
    
    if (!savedPost) {
      return NextResponse.json(
        { error: 'Saved post not found' },
        { status: 404 }
      )
    }
    
    await prisma.savedPost.delete({
      where: { id: savedPost.id },
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error unsaving post:', error)
    return NextResponse.json(
      { error: 'Failed to unsave post' },
      { status: 500 }
    )
  }
}

