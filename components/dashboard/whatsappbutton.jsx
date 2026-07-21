
// components/WhatsAppButton.jsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simple fade-in animation after mount
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Link
      href="https://wa.me/923001188994?text=Hello%20Kamfe%20Dental%20Lab%2C%20I'd%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-teal-foreground shadow-glow transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0)',
      }}
      tabIndex={0}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal/40" />
      <MessageCircle className="relative size-7" />
    </Link>
  )
}
