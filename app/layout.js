'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Analytics } from '@vercel/analytics'

export default function RootLayout({ children }) {
  const router = useRouter();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const fade = useAnimation();

  useEffect(() => {
      fade.set({ opacity: 0})
      fade.start({ opacity: 1}) 
  }, [isInView])

  return (

    <AnimatePresence>
      <html lang="en" ref={ref}>
        <motion.body suppressHydrationWarning
          key={router} 
          animate={fade}>
          <ThemeProvider enableSystem={true} attribute="class">
            {children}
            <Analytics />
          </ThemeProvider>
        </motion.body>
      </html>
    </AnimatePresence>
  )
}
