# Solvers Database

An ancient coin catalog and detection system powered by Roboflow AI.

## Features

- Browse a curated collection of 17 ancient Greek and Roman coins
- Upload images to detect and identify coins using AI
- Detailed information including mint, date, weight, dimensions, and provenance
- Corpus Nummorum citations for academic reference

## Getting Started

### Prerequisites

- Node.js 18+ or pnpm
- Roboflow account with a trained coin detection model

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd solvers-database
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
pnpm install
\`\`\`

3. Set up environment variables:

Copy `.env.example` to `.env.local`:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Then edit `.env.local` and add your Roboflow credentials:
\`\`\`env
ROBOFLOW_API_KEY=your_api_key_here
ROBOFLOW_MODEL=your_model_name
ROBOFLOW_VERSION=your_model_version
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ROBOFLOW_API_KEY` | Your Roboflow API key | Yes |
| `ROBOFLOW_MODEL` | Your Roboflow model name | Yes |
| `ROBOFLOW_VERSION` | Your Roboflow model version | Yes |

## Project Structure

\`\`\`
├── app/
│   ├── api/detect-coin/     # Roboflow detection API
│   ├── coins/[id]/          # Individual coin pages
│   ├── detect/              # Image upload page
│   └── page.tsx             # Home page
├── components/
│   ├── coin-grid.tsx        # Coin collection display
│   └── image-upload-detector.tsx
└── public/images/           # Coin images
\`\`\`

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Roboflow AI for coin detection

## License

MIT
