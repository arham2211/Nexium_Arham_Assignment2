"use client";
import BlogForm from "@/components/BlogForm";


export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📰 Blog Summarizer</h1>
      <BlogForm />
    </main>
  );
}
