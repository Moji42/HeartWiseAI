import { useState, useCallback } from 'react';

// Types for AI coaching
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

// Initial AI greeting
const initialMessage: Message = {
  id: '0',
  role: 'assistant',
  content:
    "Hello! I'm your HeartWise AI coach. I'm here to support you with relationship guidance, emotional intelligence insights, and a safe space to explore your feelings. How can I help you today?",
  createdAt: new Date(),
};

// Mock AI responses - will be replaced with actual AI integration
const mockResponses = [
  "Thank you for sharing that with me. I understand this must be important to you. Can you tell me more about how this situation is affecting you emotionally?",
  "It sounds like you're dealing with a challenging situation. Let's explore some strategies that might help you navigate this better.",
  "I appreciate your openness. Emotional awareness is the first step toward positive change. What specific outcome are you hoping for?",
  "That's a great observation about yourself. Self-reflection is key to emotional growth. How does recognizing this make you feel?",
  "I hear you. It's completely normal to feel that way. Let's work together to find some constructive approaches to this situation.",
];

export function useAICoach() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [sessionId] = useState(() => Date.now().toString());

  // Send a message and get AI response
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    setLoading(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      createdAt: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    try {
      // TODO: Replace with actual AI API call
      // Simulate API delay
      await new Promise<void>(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

      // Get random mock response
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: randomResponse,
        createdAt: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      return assistantMessage;
    } finally {
      setLoading(false);
    }
  }, []);

  // Clear chat history and start new session
  const clearChat = useCallback(() => {
    setMessages([initialMessage]);
  }, []);

  // Get chat statistics
  const getStats = useCallback(() => {
    const userMessages = messages.filter(m => m.role === 'user').length;
    const totalMessages = messages.length;
    
    return {
      totalSessions: 1, // Will be replaced with Supabase query
      totalMessages,
      userMessages,
      aiMessages: totalMessages - userMessages,
    };
  }, [messages]);

  return {
    loading,
    messages,
    sessionId,
    sendMessage,
    clearChat,
    getStats,
  };
}

