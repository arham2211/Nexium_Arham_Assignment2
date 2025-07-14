"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EnhancedBlogFormProps {
  setEngSummary: (summary: string) => void;
  setUrduSummary: (summary: string) => void;
  setIsLoading: (loading: boolean) => void;
}

export default function EnhancedBlogForm({ setEngSummary, setUrduSummary, setIsLoading }: EnhancedBlogFormProps) {
  const [url, setUrl] = useState("");
  
  const exampleUrls = [
    "https://medium.com/the-quantastic-journal/interpretability-of-graph-neural-networks-an-exploratory-study-of-nodes-features-and-attention-70799aec74dd",
    "https://lamarr-institute.org/blog/fine-tuning-asr-models/",
    "https://blazearts.co.uk/blog/my-internship-experience/"
  ];

  const handleSubmit = async () => {
    if (!url.trim()) return;
    
    try {
      setIsLoading(true);
      setEngSummary("");
      setUrduSummary("");
      
      const res = await axios.post("/api/summarize", { url });
      
      setEngSummary(res.data.engSummary);
      setUrduSummary(res.data.urduSummary);
    } catch (error) {
      console.error("Error fetching summary:", error);
      setEngSummary("An error occurred while fetching the summary.");
      setUrduSummary("خلاصہ حاصل کرتے وقت ایک خرابی پیش آگئی۔");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (exampleUrl: string) => {
    setUrl(exampleUrl);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Input
          className="flex-grow border-indigo-200 focus:border-indigo-500"
          placeholder="Enter blog URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          onClick={handleSubmit}
        >
          Summarize
        </Button>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-slate-500 mb-2">Or try one of these examples:</p>
        <div className="flex flex-wrap gap-2">
          {exampleUrls.map((exampleUrl, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="text-xs border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              onClick={() => handleExampleClick(exampleUrl)}
            >
              Example {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}