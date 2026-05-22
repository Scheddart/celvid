'use client'

import { useEffect, useRef } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (v) v.play().catch(() => {})
  }, [])

  return (
    <section className="relative h-screen overflow-hidden" id="inicio">
      {/* Vídeo de fundo */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={`${BASE}/hero-poster.jpg`}
      >
        <source src={`${BASE}/hero.webm`} type="video/webm" />
        <source src={`${BASE}/hero.mp4`} type="video/mp4" />
      </video>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55" />

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase mb-5"
          style={{ color: 'rgba(244,244,242,0.65)' }}
        >
          Primeira Loja Conceito Maza do Brasil
        </p>

        <h1
          className="font-display leading-none mb-5"
          style={{
            fontSize: 'clamp(3.2rem, 10vw, 9rem)',
            color: '#F4F4F2',
            textShadow: '0 2px 40px rgba(0,0,0,0.45)',
          }}
        >
          COR &amp; LAR
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #D62828 0%, #F28C28 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TINTAS
          </span>
        </h1>

        <p
          className="font-light tracking-wide mb-10 max-w-sm md:max-w-md"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
            color: 'rgba(244,244,242,0.80)',
          }}
        >
          Onde a cor ganha vida. — Leme, SP.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#produtos"
            className="px-8 py-3 text-sm font-medium tracking-[0.18em] uppercase transition-opacity duration-200 hover:opacity-80"
            style={{
              background: 'linear-gradient(135deg, #D62828 0%, #F28C28 100%)',
              color: '#F4F4F2',
              borderRadius: '2px',
            }}
          >
            Ver Produtos
          </a>
          <a
            href="https://wa.me/551935732828"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-sm font-medium tracking-[0.18em] uppercase border transition-all duration-200 hover:bg-white/10"
            style={{
              borderColor: 'rgba(244,244,242,0.38)',
              color: '#F4F4F2',
              borderRadius: '2px',
            }}
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Seta de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce pointer-events-none select-none">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(244,244,242,0.45)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  )
}
