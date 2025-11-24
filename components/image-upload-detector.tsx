"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, ImageIcon, Loader2, CheckCircle2, AlertCircle, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export function ImageUploadDetector() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDetecting, setIsDetecting] = useState(false)
  const [detectionResult, setDetectionResult] = useState<{
    coinId: string
    found: boolean
    message?: string
  } | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setDetectionResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleLoadExample = async () => {
    try {
      // Load coin 66472 (Athena with helmet) as example
      const response = await fetch("/images/cn-coin-66472-1.jpeg")
      const blob = await response.blob()
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setDetectionResult(null)
        toast({
          title: "Example Loaded",
          description: "cn coin 66472 loaded for testing",
        })
      }
      reader.readAsDataURL(blob)
    } catch (error) {
      console.error("[v0] Error loading example:", error)
      toast({
        title: "Failed to Load Example",
        description: "Could not load example image",
        variant: "destructive",
      })
    }
  }

  const handleDetectImage = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      })
      return
    }

    setIsDetecting(true)

    try {
      const response = await fetch("/api/detect-coin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: selectedImage }),
      })

      const data = await response.json()

      if (data.success && data.found) {
        setDetectionResult({
          coinId: data.coinId,
          found: true,
        })
        toast({
          title: "Coin Detected!",
          description: `Found: cn coin ${data.coinId}`,
        })

        setTimeout(() => {
          router.push(`/coins/${data.coinId}`)
        }, 1500)
      } else {
        setDetectionResult({
          coinId: "UNKNOWN",
          found: false,
          message: data.message || "Could not identify this coin in our database",
        })
        toast({
          title: "Coin Not Found",
          description: "This coin is not in our database",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("[v0] Detection error:", error)
      toast({
        title: "Detection Failed",
        description: "An error occurred during detection",
        variant: "destructive",
      })
    } finally {
      setIsDetecting(false)
    }
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Upload & Detect Coin</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Upload an image of a coin to detect and identify it from our database
          </p>
        </div>

        {/* Upload Section */}
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          {selectedImage ? (
            <div className="space-y-4">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Uploaded coin"
                className="max-h-64 mx-auto rounded-lg object-contain"
              />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedImage(null)
                  setDetectionResult(null)
                }}
              >
                Remove Image
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <ImageIcon className="h-16 w-16 mx-auto text-muted-foreground" />
              <div className="flex gap-2 justify-center flex-wrap">
                <label htmlFor="coin-upload" className="cursor-pointer">
                  <Button variant="outline" asChild>
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Image
                    </span>
                  </Button>
                </label>
                <Button variant="secondary" onClick={handleLoadExample}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Try Example
                </Button>
                <input id="coin-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </div>
              <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG, JPEG</p>
            </div>
          )}
        </div>

        {/* Detect Button */}
        {selectedImage && (
          <Button onClick={handleDetectImage} disabled={isDetecting} className="w-full" size="lg">
            {isDetecting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Detecting...
              </>
            ) : (
              <>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Detect Image
              </>
            )}
          </Button>
        )}

        {detectionResult && (
          <div
            className={
              detectionResult.found
                ? "bg-primary/10 border border-primary/20 rounded-lg p-4"
                : "bg-destructive/10 border border-destructive/20 rounded-lg p-4"
            }
          >
            <div className="flex items-start gap-3">
              {detectionResult.found ? (
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
              )}
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {detectionResult.found ? "Coin Detected!" : "Coin Not Found"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {detectionResult.found
                    ? `cn coin ${detectionResult.coinId} - Redirecting to coin page...`
                    : detectionResult.message}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
