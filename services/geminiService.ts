import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const sendMessageToConsultant = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    if (!apiKey) {
      return "Извините, соединение с сервером (API Key) отсутствует. Пожалуйста, свяжитесь с администратором.";
    }

    const model = 'gemini-2.5-flash';
    
    // Construct the conversation history for context
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `Ты — "Aura", старший технический консультант (Senior Technical Sales) в премиальной веб-студии Aura Digital Systems.
        Твоя цель — квалифицировать лидов и помогать потенциальным клиентам определить объем работ (scope) их проекта.
        Общайся строго на русском языке.
        
        Компетенции Агентства:
        - Сложная веб-разработка (React, Node, Python, High-load)
        - AI Интеграции (LLMs, автоматизация бизнес-процессов)
        - Enterprise UI/UX Дизайн
        - Мобильная разработка (React Native)
        
        Тон общения: Профессиональный, экспертный, лаконичный, "дорогой". Не будь навязчивым, веди себя как опытный партнер, а не как дешевый менеджер по продажам.
        
        Инструкции:
        1. Задавай уточняющие вопросы (бюджет, сроки, предпочтительный стек), чтобы понять суть задачи.
        2. Ответы должны быть короткими (до 100 слов), если не требуется глубокого технического объяснения.
        3. Если спрашивают цену, давай вилку "от и до" в зависимости от сложности (Например: Простые проекты: от $5k, Средние: $15k-$30k, Сложные экосистемы: $50k+).
        4. Всегда предлагай забронировать полноценный звонок с техническим директором для детальной оценки.
        `,
      }
    });

    const historyText = history.map(h => `${h.role === 'user' ? 'Клиент' : 'Aura'}: ${h.text}`).join('\n');
    const fullPrompt = `${historyText}\nКлиент: ${newMessage}\nAura:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
        model,
        contents: fullPrompt, 
        config: {
            systemInstruction: "Ты — Aura, технический консультант веб-студии. Отвечай на русском языке, профессионально, помогая клиенту."
        }
    });

    return response.text || "Прошу прощения, возникла сложность с обработкой вашего запроса.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Возникли технические неполадки. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.";
  }
};