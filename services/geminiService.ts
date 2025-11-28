import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in process.env");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<void> => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: "You are a helpful and professional dental assistant for 'Teba Specialized Dental Center'. specialized in dentistry. Answer patient questions about dental procedures, oral hygiene, and the clinic's services (Cosmetic, Orthodontics, Implants, Root Canals, Pediatric, Gum Treatment). Keep answers concise, friendly, and encouraging. Always advise users to book an appointment for a proper diagnosis. Do not provide specific medical diagnoses.",
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToAI = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    return "I'm sorry, I am currently offline. Please try again later.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I didn't quite catch that. Could you rephrase?";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm having trouble connecting right now. Please call our clinic directly.";
  }
};