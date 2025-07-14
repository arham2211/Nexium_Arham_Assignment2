import mongoose from "mongoose";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function connectMongo() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI!);
}

const BlogSchema = new mongoose.Schema({
  url: String,
  fullText: String,
});

export const BlogModel = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
