import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAuthenticated } from '@/lib/auth'
import { writeFile } from 'fs/promises'
import { join } from 'path'

// GET all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// POST create new post
export async function POST(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const facebookUrl = formData.get('facebookUrl') as string
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const image = formData.get('image') as File

    // Validate Facebook URL
    if (!facebookUrl.startsWith('https://www.facebook.com/') && 
        !facebookUrl.startsWith('https://fb.watch/')) {
      return NextResponse.json(
        { error: 'Invalid Facebook URL' },
        { status: 400 }
      )
    }

    // Validate image
    if (!image || image.size === 0) {
      return NextResponse.json(
        { error: 'Image is required' },
        { status: 400 }
      )
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(image.type)) {
      return NextResponse.json(
        { error: 'Invalid image type. Only JPG, PNG, and WEBP allowed' },
        { status: 400 }
      )
    }

    // Check file size (2MB max)
    if (image.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Image size must be less than 2MB' },
        { status: 400 }
      )
    }

    // Save image to public/uploads
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const timestamp = Date.now()
    const filename = `${timestamp}-${image.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
    const filepath = join(process.cwd(), 'public', 'uploads', filename)
    
    await writeFile(filepath, buffer)
    const thumbnailUrl = `/uploads/${filename}`

    // Create post in database
    const post = await prisma.post.create({
      data: {
        facebookUrl,
        title: title || null,
        description: description || null,
        thumbnailUrl,
        isActive: true,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

