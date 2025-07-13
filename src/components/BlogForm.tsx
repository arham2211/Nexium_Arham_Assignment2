"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BlogForm() {
  const [url, setUrl] = useState("");
  // const [summary, setSummary] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("/api/summarize", { url });
    console.log("Response: ",res.data.summary);
    // setSummary(res.data.content);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <Input
        placeholder="Enter blog URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button onClick={handleSubmit}>Summarise</Button>
      {/* {summary && (
        <div className="p-4 border rounded bg-muted">
          <h3 className="font-bold mb-2">Summary (Urdu):</h3>
          <p>{summary}</p>
        </div>
      )} */}
    </div>
  );
}
