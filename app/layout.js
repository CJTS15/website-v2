'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <AnimatePresence>
      <html lang="en">
        <motion.body suppressHydrationWarning className={inter.className}
          key={router}
          initial="initialState"
          animate="animateState"
          transition={{ duration: .25, delay: 0.15 }}
          exit="exitState"
          variants={{
            initialState: {
              opacity: 0, clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
            animateState: {
              opacity: 1, clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
            },
            exitState: {
            }
          }}>
          <ThemeProvider enableSystem={true} attribute="class">
            {children}
          </ThemeProvider>
        </motion.body>
      </html>
    </AnimatePresence>
  )
}
