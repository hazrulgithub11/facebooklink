'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function FacebookSDK() {
  return (
    <>
      <div id="fb-root"></div>
      <Script
        id="facebook-sdk"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"
        onLoad={() => {
          if (window.FB) {
            console.log('Facebook SDK loaded successfully')
          }
        }}
        onError={(e) => {
          console.error('Failed to load Facebook SDK:', e)
        }}
      />
      <Script
        id="facebook-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml: true,
                version: 'v21.0'
              });
            };
          `,
        }}
      />
    </>
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
    fbAsyncInit?: () => void
  }
}

