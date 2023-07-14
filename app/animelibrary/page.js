import Navbar from '@/components/Navbar'
import AnimeLibrary from '@/components/animelibrary/AnimeLibrary'
import Footer from '@/components/Footer'

export const metadata = {
  title: "AnimeLibrary",
  discription: "Your Friendly Neighborhood Tech Support",
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <AnimeLibrary />
      <Footer />
    </div>
  )
}