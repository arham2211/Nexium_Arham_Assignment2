import { NextRequest, NextResponse } from "next/server";
import { summarizeText } from "@/lib/summarize";
import { translateToUrduAI } from "@/lib/translateToUrdu";

import { supabase, connectMongo, BlogModel } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  const res = await fetch(url);
  const html = await res.text();
  const fullText = html.trim().slice(0, 5000);

  const summary = await summarizeText(fullText);
  const urduSummary = await translateToUrduAI(summary);

  await connectMongo();
  await BlogModel.create({ url, fullText });

  await supabase.from("summaries").insert([{ url, summary: summary }]);

  return NextResponse.json({ engSummary: summary, urduSummary: urduSummary });
}
