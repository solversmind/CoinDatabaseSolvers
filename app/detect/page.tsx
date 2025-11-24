import Link from "next/link"
import { ImageUploadDetector } from "@/components/image-upload-detector"
import { Coins, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DetectPage() {
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
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Collection
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Detect Coin</h2>
          <p className="text-muted-foreground leading-relaxed">
            Upload an image of your coin and our AI-powered system will identify it from our database.
          </p>
        </div>

        <ImageUploadDetector />
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
