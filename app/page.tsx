import Link from "next/link"
import { CoinGrid } from "@/components/coin-grid"
import { Search, Coins, Upload } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Coins className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Solvers Database</h1>
            </Link>
            <div className="flex items-center gap-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search coins..." className="pl-10" />
              </div>
              <Link href="/detect">
                <Button className="gap-2">
                  <Upload className="h-4 w-4" />
                  Detect Coin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Ancient Coin Collection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Browse our comprehensive collection of ancient coins with detailed historical information and
            high-resolution imagery.
          </p>
        </div>

        <CoinGrid />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Solvers Database. Educational and research purposes.
          </p>
        </div>
      </footer>
    </div>
  )
}
