'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FacebookEmbed } from './FacebookEmbed'

interface LinkCardProps {
  id: string
  url: string
  title: string | null
  description: string | null
  image: string | null
  platform: string | null
  renderType?: string | null
}

export function LinkCard({
  id,
  url,
  title,
  description,
  image,
  platform,
  renderType = 'card',
}: LinkCardProps) {
  // If it's a Facebook embed, render the embed component
  if (renderType === 'embed' && platform === 'facebook') {
    return <FacebookEmbed url={url} />
  }

  // Otherwise, render the card preview
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col md:flex-row">
        {image && (
          <div className="relative h-48 w-full bg-gray-100 md:h-auto md:w-64 md:flex-shrink-0">
            <Image
              src={image}
              alt={title || 'Link preview'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          {platform && (
            <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {platform}
            </span>
          )}
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            {title || 'Untitled Link'}
          </h3>
          {description && (
            <p className="mb-4 flex-1 text-gray-600 line-clamp-2">
              {description}
            </p>
          )}
          <div className="flex items-center text-sm text-blue-600">
            View Original →
          </div>
        </div>
      </div>
    </Link>
  )
}

