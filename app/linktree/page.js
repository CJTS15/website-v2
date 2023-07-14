import Navbar from '@/components/Navbar'
import Linktree from '@/components/Linktree'
import Footer from '@/components/Footer'

export const metadata = {
  title: "My Links | Connect With Me",
  discription: "Your Friendly Neighborhood Tech Support",
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <Linktree />
      <Footer />     
    </div>
  )
}