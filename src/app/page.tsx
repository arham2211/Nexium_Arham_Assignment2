"use client";
import { useState } from "react";
import EnhancedBlogForm from "@/components/BlogForm";
import SummaryDisplay from "@/components/SummaryDisplay";

export default function HomePage() {
  const [engSummary, setEngSummary] = useState("");
  const [urduSummary, setUrduSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 pt-8">
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">📰 Blog Summarizer</h1>
          <p className="text-slate-600">Paste any blog URL to get an instant summary in English and Urdu</p>
        </div>
        
        <EnhancedBlogForm 
          setEngSummary={setEngSummary} 
          setUrduSummary={setUrduSummary}
          setIsLoading={setIsLoading}
        />
        
        <SummaryDisplay 
          engSummary={engSummary} 
          urduSummary={urduSummary}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
}