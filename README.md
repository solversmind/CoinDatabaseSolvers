Solvers Database

An ancient coin catalog and AI-powered identification system built with Next.js and Roboflow.

<p align="left"> <img src="https://img.shields.io/badge/Next.js-16-black" /> <img src="https://img.shields.io/badge/TypeScript-5-blue" /> <img src="https://img.shields.io/badge/Roboflow-AI-orange" /> <img src="https://img.shields.io/badge/License-MIT-green" /> </p>
Overview

Solvers Database is a lightweight numismatic viewer and coin recognition tool.
It showcases a curated set of 17 ancient Greek and Roman coins, each with metadata from Corpus Nummorum, and includes an integrated AI classifier powered by Roboflow that identifies coins from user-uploaded images.

Features

📚 Browse Ancient Coins
View obverse/reverse images, mints, dates, diameters, weights, and references.

🧠 AI Coin Identification
Upload a photo and get instant predictions from a Vision Transformer trained for ancient coin classification.

🔗 Museum-Grade Metadata
Includes mint data, provenance, and citations referencing Corpus Nummorum IDs.

⚡ Fast & Modern UI
Built with Next.js App Router, TailwindCSS, and shadcn/ui.

Getting Started
Prerequisites

Node.js 18+

pnpm or npm

A Roboflow account with a trained coin classification model

Installation

Clone the project:

git clone <your-repo-url>
cd solvers-database


Install dependencies:

npm install
# or
pnpm install


Create an environment file:

cp .env.example .env.local


Fill in your Roboflow credentials:

ROBOFLOW_API_KEY=your_api_key
ROBOFLOW_MODEL=your_model_name
ROBOFLOW_VERSION=your_version


Run the development server:

npm run dev
# or
pnpm dev


App will be available at:
👉 http://localhost:3000

Environment Variables
Variable	Description	Required
ROBOFLOW_API_KEY	Your Roboflow API key	✔️
ROBOFLOW_MODEL	The model ID (e.g., ancient-coin-detector)	✔️
ROBOFLOW_VERSION	Model version number	✔️
Project Structure
solvers-database/
├── app/
│   ├── api/detect-coin/       # Backend API -> Roboflow inference
│   ├── coins/[id]/            # Individual coin pages
│   ├── detect/                # Image upload + prediction
│   └── page.tsx               # Home page
├── components/
│   ├── coin-grid.tsx          # Coin gallery layout
│   └── image-upload-detector.tsx
└── public/
    └── images/                # Local coin images

Tech Stack

Next.js 16 (App Router)

TypeScript

Tailwind CSS

shadcn/ui

Roboflow Vision Transformer Model

Vercel (optional deployment)

Model Training Notes

This project uses a custom Roboflow model trained on:

17 total classes

34 museum-sourced images (obverse + reverse)

Heavy domain-specific augmentation

Final architecture: ViT-B/16 (ImageNet-21k pretrained)

For details on model experimentation and results, see:
👉 docs/AI_Model_Report.md (optional if you create it)

License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this code.
