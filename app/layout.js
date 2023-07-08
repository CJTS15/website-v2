'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Hi, I'm CJ | Your Friendly Neighborhood Tech Support",
  description: 'Your Friendly Neighborhood Tech Support',
}

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.html lang="en" suppressHydrationWarning
        key={router}
        initial="initialState"
        animate="animateState"
        transition={{ duration: 0.2, delay: 0.25 }}
        exit="exitState"
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
          }
        }}>
        <body className={inter.className}>
          <ThemeProvider enableSystem={true} attribute="class">
            {children}
          </ThemeProvider>
        </body>
      </motion.html>
    </AnimatePresence>
  )
}
