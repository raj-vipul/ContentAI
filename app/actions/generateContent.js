"use server";

import { GoogleGenerativeAI } from "@google/generative-ai"; // ✅ Correct import

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

export async function generateContent(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = model.startChat();
    const result = await chat.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Gemini failed: " + error.message;
  }
}
