import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CasinoRankings } from "@/components/casino-rankings"
import { HowWeRank } from "@/components/how-we-rank"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black/50 relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      <Header />
      <Hero />
      <CasinoRankings />
      <HowWeRank />
      <Footer />
      <CookieBanner />
      <CasinoModal />
    </div>
  )
}
