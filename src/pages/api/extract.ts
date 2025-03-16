import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Text input is required" });
  }

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: `Extract software requirements from the following text:\n\n${text}`,
        parameters: { max_new_tokens: 200, return_full_text: false }
      })
    });
    

    if (!response.ok) {
      throw new Error(`Hugging Face API Error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Extract the generated text response
    const extractedData = data[0]?.generated_text || "No output generated.";

    return res.status(200).json({ extractedData });

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Hugging Face API Error:", error.message);
      return res.status(500).json({ message: "Failed to extract requirements", error: error.message });
    }
  }  
}
