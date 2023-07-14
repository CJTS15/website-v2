import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

import React from 'react'

export const metadata = {
  title: "Hi, I'm CJ 👋",
  discription: "Your Friendly Neighborhood Tech Support",
}

export default function Home() {

  return (
     <div>
        <Navbar />
        <Main />
        <Footer />
    </div>
  )
}
