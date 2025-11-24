Solvers Database

An ancient coin catalog and AI-powered identification system built with Next.js and Roboflow.

Overview

Solvers Database is a lightweight numismatic viewer and recognition tool.
It features a curated collection of 17 ancient Greek and Roman coins with full metadata and an integrated AI classifier powered by Roboflow.

Features

Browse a collection of authenticated ancient coins

Upload images to identify coins using a trained AI model

View mint, date, weight, dimensions, material, and provenance

Corpus Nummorum citations for academic reference

Modern UI built with Next.js, TypeScript, Tailwind, and shadcn/ui

Getting Started
Prerequisites

Node.js 18 or higher

npm or pnpm

Roboflow account with a trained classification model

Installation

Clone the repository:

git clone <your-repo-url>
cd solvers-database


Install dependencies:

npm install
# or
pnpm install


Create your environment file:

cp .env.example .env.local


Add your Roboflow credentials:

ROBOFLOW_API_KEY=your_api_key_here
ROBOFLOW_MODEL=your_model_name
ROBOFLOW_VERSION=your_model_version


Run the development server:

npm run dev
# or
pnpm dev


Open the app at:
http://localhost:3000

Environment Variables
Variable	Description	Required
ROBOFLOW_API_KEY	Roboflow API key	Yes
ROBOFLOW_MODEL	Model name	Yes
ROBOFLOW_VERSION	Model version	Yes
Project Structure
solvers-database/
├── app/
│   ├── api/detect-coin/       # Roboflow inference API
│   ├── coins/[id]/            # Individual coin detail pages
│   ├── detect/                # Image upload + AI prediction
│   └── page.tsx               # Homepage
├── components/
│   ├── coin-grid.tsx          # Grid view of all coins
│   └── image-upload-detector.tsx
└── public/
    └── images/                # Local coin images

Platform Evaluation

We evaluated several options:

Platform	Reason
Roboflow	Fast iteration, AutoML, easy deployment
Teachable Machine	Simple, beginner-friendly, but limited for fine-grained classes
Google AutoML	Slow and costly
AWS SageMaker	Overkill for this project
Custom PyTorch	Requires heavy infrastructure, slower development

Final choice: Roboflow for rapid experimentation and simple API integration.

Tech Stack

Next.js 16 (App Router)

TypeScript

Tailwind CSS

shadcn/ui components

Roboflow Vision Transformer model

Optional deployment via Vercel

License

MIT License
