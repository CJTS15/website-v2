import Navbar from '@/components/Navbar'
import Beshifier from '@/components/Beshifier'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Beshifier | Beshify App",
  discription: "Your Friendly Neighborhood Tech Support",
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <Beshifier />
      <Footer />
    </div>
  )
}