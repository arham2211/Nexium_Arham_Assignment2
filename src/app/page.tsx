"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import EnhancedBlogForm from "@/components/BlogForm";
import SummaryDisplay from "@/components/SummaryDisplay";
import "../app/globals.css";

export default function HomePage() {
  const [engSummary, setEngSummary] = useState("");
  const [urduSummary, setUrduSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50 p-6 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-12 pt-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-sm mb-3">
            📰 Blog Summarizer
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Paste any blog URL to generate instant summaries in English and Urdu using AI
          </p>
        </motion.div>

        {/* Glassy Form Section */}
        <motion.div
          className="backdrop-blur-md bg-white/80 shadow-xl rounded-2xl p-6 mb-10 border border-white/40"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <EnhancedBlogForm 
            setEngSummary={setEngSummary} 
            setUrduSummary={setUrduSummary}
            setIsLoading={setIsLoading}
          />
        </motion.div>

        {/* Loading Indicator */}
        {isLoading && (
          <motion.div 
            className="flex justify-center items-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div>
            </div>
            <p className="ml-4 text-indigo-700 font-medium">Generating summaries...</p>
          </motion.div>
        )}

        {/* Animated Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: (engSummary || urduSummary) && !isLoading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <SummaryDisplay 
            engSummary={engSummary} 
            urduSummary={urduSummary}
            isLoading={isLoading}
          />
        </motion.div>
      </div>
    </main>
  );
}