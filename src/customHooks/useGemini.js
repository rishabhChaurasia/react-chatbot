import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useState } from "react";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const useGemini = () => {
  const [userQueryData, setUserQueryData] = useState(null);
  const [recentUserQuery, setRecentUserQuery] = useState("");
  const [userQueryDataLoading, setUserQueryDataLoading] = useState(false);
  // const [prevUserQuery, setPrevUserQuery] = useState(null);

  const geminiQuery = async (userQuery) => {
    setUserQueryDataLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      };

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      setRecentUserQuery(userQuery);
      const result = await chat.sendMessage(userQuery);
      const response = result.response;
      const data = response.text();
      setUserQueryData(data);
      setUserQueryDataLoading(false);
    } catch (error) {
      console.log(error.message);
      setUserQueryDataLoading(false);
    }
  };
  return { userQueryData, geminiQuery, recentUserQuery, userQueryDataLoading };
};

export default useGemini;
