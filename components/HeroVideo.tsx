'use client'

import { useEffect, useRef } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // Garante autoplay mesmo em políticas restritivas (Safari, Chrome em alguns casos)
    v.muted = true
    v.playsInline = true

    const tryPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Em iOS/algumas versões, autoplay só rola após interação — tenta de novo
          const onInteract = () => {
            v.play().catch(() => {})
            window.removeEventListener('touchstart', onInteract)
            window.removeEventListener('click', onInteract)
          }
          window.addEventListener('touchstart', onInteract, { once: true })
          window.addEventListener('click', onInteract, { once: true })
        })
      }
    }

    if (v.readyState >= 2) {
      tryPlay()
    } else {
      v.addEventListener('loadeddata', tryPlay, { once: true })
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-black" id="inicio">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={`${BASE}/hero-poster.jpg`}
        onError={(e) => console.error('Hero video error:', e.currentTarget.error)}
        onStalled={() => console.warn('Hero video stalled')}
        onLoadedData={() => console.log('Hero video loaded')}
      >
        <source src={`${BASE}/hero.mp4`} type="video/mp4" />
        <source src={`${BASE}/hero.webm`} type="video/webm" />
      </video>

      {/* Seta de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce pointer-events-none select-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(244,244,242,0.7)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  )
}
