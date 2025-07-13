import { groq } from "./groqClient";

export async function translateToUrduAI(text: string): Promise<string> {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that translates English text into formal Urdu.",
        },
        {
          role: "user",
          content: `Translate the following English summary to Urdu:\n\n"${text}"`,
        },
      ],
      model: "llama3-8b-8192",
    });

    const translatedText = chatCompletion.choices[0]?.message?.content;
    return translatedText || "Translation failed";
  } catch (error) {
    console.error("Groq translation error:", error);
    return "Translation error";
  }
}
