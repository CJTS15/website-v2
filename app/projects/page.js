import Navbar from '@/components/Navbar'
import MoreProjects from '@/components/MoreProjects'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Projects | My Works",
  discription: "Your Friendly Neighborhood Tech Support",
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <MoreProjects />
      <Footer />
    </div>

  )
}
