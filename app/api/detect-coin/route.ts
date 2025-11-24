export async function POST(request: Request) {
  try {
    const { image } = await request.json()

    console.log("[v0] Starting Roboflow coin detection")

    const roboflowApiKey = process.env.ROBOFLOW_API_KEY
    const roboflowModel = process.env.ROBOFLOW_MODEL
    const roboflowVersion = process.env.ROBOFLOW_VERSION

    if (!roboflowApiKey || !roboflowModel || !roboflowVersion) {
      throw new Error("ROBOFLOW_API_KEY, ROBOFLOW_MODEL, and ROBOFLOW_VERSION environment variables are required")
    }

    let base64Image = image
    if (base64Image.startsWith("data:")) {
      base64Image = base64Image.split(",")[1]
    }
    // Remove any whitespace or newlines
    base64Image = base64Image.replace(/\s/g, "")

    console.log("[v0] Image data length:", base64Image.length)
    console.log("[v0] First 50 chars of base64:", base64Image.substring(0, 50))

    const roboflowUrl = `https://detect.roboflow.com/${roboflowModel}/${roboflowVersion}?api_key=${roboflowApiKey}&confidence=5`

    console.log("[v0] Calling Roboflow API:", roboflowUrl.replace(roboflowApiKey, "***"))

    const response = await fetch(roboflowUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: base64Image,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Roboflow API error:", errorText)
      throw new Error(`Roboflow API error: ${response.status} - ${errorText}`)
    }

    const result = await response.json()
    console.log("[v0] Roboflow response:", JSON.stringify(result))
    console.log("[v0] Number of predictions:", result.predictions?.length || 0)

    const CONFIDENCE_THRESHOLD = 0.05

    let coinId = "UNKNOWN"

    if (result.predictions && result.predictions.length > 0) {
      // Filter predictions by confidence threshold
      const validPredictions = result.predictions.filter((pred: any) => pred.confidence >= CONFIDENCE_THRESHOLD)

      console.log("[v0] Valid predictions above threshold:", validPredictions.length)

      if (validPredictions.length > 0) {
        // Get the highest confidence prediction above threshold
        const topPrediction = validPredictions.reduce((prev: any, current: any) =>
          prev.confidence > current.confidence ? prev : current,
        )

        const className = topPrediction.class || topPrediction.predicted_class || "UNKNOWN"

        // Extract just the number from "cn coin 66472" format
        const match = className.match(/cn coin (\d+)/)
        if (match) {
          coinId = match[1]
        }

        console.log("[v0] Detected coin class:", className)
        console.log("[v0] Extracted coin ID:", coinId, "Confidence:", topPrediction.confidence)
      } else {
        console.log("[v0] No predictions above confidence threshold of", CONFIDENCE_THRESHOLD)
      }
    } else {
      console.log("[v0] No predictions returned from Roboflow")
    }

    // Check if it's a valid coin number from our database
    const validCoinIds = [
      "65875",
      "65868",
      "65853",
      "65921",
      "65835",
      "66472",
      "66719",
      "66237",
      "66996",
      "66997",
      "67003",
      "67004",
      "67005",
      "67006",
      "67007",
      "67008",
      "67009",
    ]

    if (validCoinIds.includes(coinId)) {
      console.log("[v0] Coin found in database:", coinId)
      return Response.json({ success: true, coinId, found: true })
    }

    console.log("[v0] Coin not found in database")
    return Response.json({
      success: true,
      coinId,
      found: false,
      message: "Coin not found in database",
      roboflowData: result,
    })
  } catch (error) {
    console.error("[v0] Error detecting coin:", error)

    const errorMessage = error instanceof Error ? error.message : "Detection failed"

    return Response.json(
      {
        success: false,
        error: errorMessage,
        details: error instanceof Error ? error.stack : String(error),
      },
      { status: 500 },
    )
  }
}
