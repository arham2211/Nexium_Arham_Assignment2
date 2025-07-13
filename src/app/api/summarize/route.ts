import { NextRequest, NextResponse } from "next/server";
import { summarizeText } from "@/lib/summarize";
import { translateToUrduAI } from "@/lib/translateToUrdu";
// import * as cheerio from "cheerio";
import { supabase } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  // console.log("URL:", url);

  const res = await fetch("https://medium.com/the-quantastic-journal/interpretability-of-graph-neural-networks-an-exploratory-study-of-nodes-features-and-attention-70799aec74dd");
  const html = await res.text();
  const fullText = html.trim().slice(0, 2000);
  

  const summary = await summarizeText(fullText);
  const urduSummary = await translateToUrduAI(summary);
  console.log("Summary:", urduSummary);

  //   await connectMongo();
  //   await BlogModel.create({ url, fullText });

  await supabase.from("summaries").insert([{ url, summary: urduSummary }]);

  return NextResponse.json({ summary: urduSummary  });
}
