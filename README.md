# 📰 Blog Summarizer

An AI-powered blog summarization tool built with **Next.js 14**, **Tailwind CSS**, **Selenium (headless)**, and **Groq/OpenAI**. This app takes a blog URL, scrapes the content, summarizes it using AI, translates the summary to Urdu, and stores both versions for easy viewing.

---

## ✨ Features

- 🧠 **AI summarization** using Groq 
- 🌐 **Urdu translation** using the Groq too
- 💾 **Supabase** integration to save summaries
- 🧊 **MongoDB** support to store full blog content
- 🚀 Deployed on **Vercel**

---

## 🧱 Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | Next.js (App Router)     |
| Styling     | Tailwind CSS v4 + ShadCN |
| Backend     | API Routes (`/api`)      |
| AI Summary  | Groq API    |
| Translation | Urdu dictionary / LLM    |
| Storage     | Supabase (PostgreSQL), MongoDB Atlas |
| Deployment  | Vercel                   |

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blog-summarizer.git
cd blog-summarizer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
GROQ_API_KEY=your_groq_key_or_openai_key
MONGODB_URI=your_mongodb_uri  # optional

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

