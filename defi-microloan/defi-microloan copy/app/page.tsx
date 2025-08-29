import { DashboardHero } from "@/components/dashboard-hero"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <DashboardHero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

