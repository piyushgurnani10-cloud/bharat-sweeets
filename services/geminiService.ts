
import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSweetRecommendations = async (userInput: string) => {
  const productListStr = PRODUCTS.map(p => `${p.name}: ${p.description}`).join('\n');
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `User is asking: "${userInput}". 
    Available sweets:\n${productListStr}\n
    Suggest the best match and explain why. Be a polite Indian sweet expert.`,
    config: {
      systemInstruction: "You are the 'Mithai Sommelier', an expert in Indian sweets. Help users choose the perfect sweet or gift based on their preferences, occasion, or health needs (like low sugar options).",
      temperature: 0.7,
    },
  });

  return response.text;
};
