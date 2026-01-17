
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export class GeminiService {
  private static instance: GeminiService;
  private ai: GoogleGenAI;

  private constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  public async performMiracle(prompt: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are the Miracle Oracle. Your task is to provide profound, insightful, and highly useful answers to the user's questions. Use an elegant, slightly mystical but clear tone.",
          temperature: 0.8,
        }
      });
      return response.text || "The oracle remains silent. Try again.";
    } catch (error) {
      console.error("Miracle failed:", error);
      return "An unexpected shadow has fallen over the miracle. Please check your connection.";
    }
  }

  public async manifestImage(prompt: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      throw new Error("No image data found in response");
    } catch (error) {
      console.error("Image manifestation failed:", error);
      throw error;
    }
  }
}
