'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Post {
  id: string
  facebookUrl: string
  title: string | null
  description: string | null
  thumbnailUrl: string
  isActive: boolean
  createdAt: string
  savedId?: string
  savedAt?: string
}

export default function HomeClient({ initialPosts }: { initialPosts: Post[] }) {
  const [activeTab, setActiveTab] = useState<'home' | 'saved'>('home')
  const [savedPosts, setSavedPosts] = useState<Post[]>([])
  const [savedPostIds, setSavedPostIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)

  // Fetch saved posts
  const fetchSavedPosts = async () => {
    try {
      const res = await fetch('/api/saved')
      if (res.ok) {
        const data = await res.json()
        setSavedPosts(data)
        setSavedPostIds(new Set(data.map((p: Post) => p.id)))
      }
    } catch (error) {
      console.error('Error fetching saved posts:', error)
    }
  }

  // Load saved posts on mount
  useEffect(() => {
    fetchSavedPosts()
  }, [])

  // Handle save/unsave
  const handleSaveToggle = async (e: React.MouseEvent, postId: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (loading) return
    setLoading(true)

    try {
      const isSaved = savedPostIds.has(postId)
      
      if (isSaved) {
        // Unsave
        const res = await fetch(`/api/saved?postId=${postId}`, {
          method: 'DELETE',
        })
        
        if (res.ok) {
          setSavedPostIds(prev => {
            const next = new Set(prev)
            next.delete(postId)
            return next
          })
          await fetchSavedPosts()
        }
      } else {
        // Save
        const res = await fetch('/api/saved', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ postId }),
        })
        
        if (res.ok) {
          setSavedPostIds(prev => new Set(prev).add(postId))
          await fetchSavedPosts()
        }
      }
    } catch (error) {
      console.error('Error toggling save:', error)
    } finally {
      setLoading(false)
    }
  }

  const postsToShow = activeTab === 'home' ? initialPosts : savedPosts

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-rose-50/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-crimson-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-crimson-100/15 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header - Frosted glass */}
      <header className="sticky top-0 glass-nav border-b z-10">
        <div className="max-w-[680px] mx-auto px-5 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-[28px] font-semibold text-slate-950 tracking-tight text-shadow-soft">
              {activeTab === 'home' ? 'Read Later' : 'Saved'}
            </h1>
            <Link
              href="/admin"
              className="text-sm font-medium text-slate-500 hover:text-crimson-600 transition-colors duration-200"
            >
              Admin
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content - Elegant card list */}
      <main className="flex-1 max-w-[680px] mx-auto w-full px-5 py-6 pb-24 md:pb-6 scroll-smooth-ios">
        {postsToShow.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-slate-400 text-base font-medium">
              {activeTab === 'home' ? 'No posts available' : 'No saved posts yet'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {postsToShow.map((post) => (
              <div
                key={post.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden group relative"
              >
                {/* Main clickable area */}
                <a
                  href={post.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-5 cursor-pointer"
                >
                  {/* Text Content - Left Side */}
                  <div className="flex-1 flex flex-col justify-center min-w-0 pr-2">
                    {/* Title */}
                    {post.title && (
                      <h2 className="text-[17px] sm:text-[19px] font-semibold text-slate-950 line-clamp-2 mb-2 leading-snug tracking-tight">
                        {post.title}
                      </h2>
                    )}
                    
                    {/* Description */}
                    {post.description && (
                      <p className="text-[14px] sm:text-[15px] text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                        {post.description}
                      </p>
                    )}
                    
                    {/* Metadata - Date with subtle accent */}
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-crimson-400/60" />
                      <p className="text-[12px] sm:text-[13px] text-slate-400 font-medium">
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail - Right Side with glass overlay */}
                  <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-soft">
                    <Image
                      src={post.thumbnailUrl}
                      alt={post.title || 'Post thumbnail'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-apple"
                      sizes="128px"
                    />
                    {/* Subtle gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />
                  </div>
                </a>

                {/* Save button - frosted glass */}
                <button
                  onClick={(e) => handleSaveToggle(e, post.id)}
                  disabled={loading}
                  className="absolute top-3 right-3 p-2.5 frost-light rounded-full shadow-soft hover:shadow-soft-lg press-effect z-10 disabled:opacity-50 border border-white/30"
                  aria-label={savedPostIds.has(post.id) ? 'Unsave post' : 'Save post'}
                >
                  {savedPostIds.has(post.id) ? (
                    <svg className="w-5 h-5 text-crimson-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Navigation - Frosted glass iOS-style */}
      <nav className="fixed bottom-0 left-0 right-0 glass-nav border-t md:hidden safe-area-bottom">
        <div className="flex justify-around items-center py-2 px-4">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 py-2 px-6 rounded-2xl press-effect transition-all duration-200 ${
              activeTab === 'home' 
                ? 'text-crimson-600' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {activeTab === 'home' ? (
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            )}
            <span className="text-[10px] font-semibold tracking-tight">Home</span>
          </button>
          
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex flex-col items-center gap-1 py-2 px-6 rounded-2xl press-effect transition-all duration-200 ${
              activeTab === 'saved' 
                ? 'text-crimson-600' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {activeTab === 'saved' ? (
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            )}
            <span className="text-[10px] font-semibold tracking-tight">Saved</span>
          </button>
          
          <Link 
            href="/admin" 
            className="flex flex-col items-center gap-1 py-2 px-6 rounded-2xl press-effect text-slate-400 hover:text-slate-600 transition-all duration-200"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[10px] font-semibold tracking-tight">Admin</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

