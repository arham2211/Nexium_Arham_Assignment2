import { groq } from "./groqClient";

export async function summarizeText(text: string): Promise<string> {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that summarizes the blog into 100 to 200 words.",
        },
        {
          role: "user",
          content: `Summarize the following English blog:\n\n"${text}"`,
        },
      ],
      model: "llama3-8b-8192",
    });

    const summarizeText = chatCompletion.choices[0]?.message?.content;
    return summarizeText || "Translation failed";
  } catch (error) {
    console.error("Groq translation error:", error);
    return "Translation error";
  }
}
