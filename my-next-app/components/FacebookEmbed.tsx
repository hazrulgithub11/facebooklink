'use client'

import { useEffect, useRef } from 'react'

interface FacebookEmbedProps {
  url: string
}

export function FacebookEmbed({ url }: FacebookEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.FB && containerRef.current) {
      window.FB.XFBML.parse(containerRef.current)
    }
  }, [url])

  return (
    <div ref={containerRef} className="my-4">
      <div
        className="fb-post"
        data-href={url}
        data-width="500"
        data-show-text="true"
      />
    </div>
  )
}

declare global {
  interface Window {
    FB?: {
      init: (config: { xfbml: boolean; version: string }) => void
      XFBML: {
        parse: (node?: HTMLElement | null) => void
      }
    }
  }
}
