# Solvers Database

An ancient coin catalog and AI-powered identification system built with Next.js and Roboflow.

## Overview

Solvers Database provides a curated dataset of 17 ancient coins and a Vision Transformer model that identifies them from uploaded images. Each coin entry includes mint, date, dimensions, material, and provenance sourced from Corpus Nummorum.

## Features

- Curated catalog of 17 ancient Greek and Roman coins
- AI-powered coin identification using the Roboflow API
- Image upload interface for real-time predictions
- Individual coin detail pages with metadata and citations
- Built with Next.js App Router, TypeScript, Tailwind, and shadcn/ui

## Getting Started

### Requirements

- Node.js v18+
- npm or pnpm
- A Roboflow account with a trained classification model

### Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd solvers-database
```

Install dependencies:

```bash
npm install
# or
pnpm install
```

Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
ROBOFLOW_API_KEY=your_api_key_here
ROBOFLOW_MODEL=your_model_name
ROBOFLOW_VERSION=your_model_version
```

Run the development server:

```bash
npm run dev
# or
pnpm dev
```

Application runs at:

```
http://localhost:3000
```

## Environment Variables

| Variable            | Description                     | Required |
|---------------------|---------------------------------|----------|
| ROBOFLOW_API_KEY    | Roboflow API key                | Yes      |
| ROBOFLOW_MODEL      | Roboflow model name             | Yes      |
| ROBOFLOW_VERSION    | Roboflow model version          | Yes      |

## Project Structure

```
solvers-database/
├── app/
│   ├── api/detect-coin/       # Roboflow inference API route
│   ├── coins/[id]/            # Individual coin detail pages
│   ├── detect/                # Image upload prediction page
│   └── page.tsx               # Homepage
├── components/
│   ├── coin-grid.tsx          # Grid view for listing coins
│   └── image-upload-detector.tsx
└── public/
    └── images/                # Local coin images
```

## Platform Evaluation

We evaluated several options:

| Platform            | Reason                                                      |
|---------------------|-------------------------------------------------------------|
| Roboflow            | Fast iteration, AutoML, easy deployment                    |
| Teachable Machine   | Simple, beginner-friendly, but limited for fine-grained classes |
| Google AutoML       | Slow and costly                                            |
| AWS SageMaker       | Overkill for this project                                  |
| Custom PyTorch      | Heavy infrastructure, slower development                   |

**Final choice:** Roboflow for rapid experimentation and simple API integration.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Roboflow Vision Transformer Model
- Optional Vercel deployment

## License

MIT License
