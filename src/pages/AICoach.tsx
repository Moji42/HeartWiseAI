import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { MessageCircle, Send, Brain, Sparkles, Shield } from "lucide-react";

const AICoach = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your HeartWise AI coach. I'm here to support you with relationship guidance, emotional intelligence insights, and a safe space to explore your feelings. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: "user", content: input }]);

    // mock chat response
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "Thank you for sharing that with me. I understand this must be important to you. Can you tell me more about how this situation is affecting you emotionally?",
        },
      ]);
    }, 1000);

    setInput("");
  };

  const quickPrompts = [
    "How can I communicate better?",
    "I'm feeling overwhelmed",
    "Help me set boundaries",
    "Dealing with conflict",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Your <span className="bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] bg-clip-text text-transparent">AI</span> Coach
            </h1>
            <p className="text-muted-foreground">Get personalized guidance powered by emotional intelligence AI</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Chat Interface */}
            <div className="md:col-span-3">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">HeartWise AI</CardTitle>
                      <CardDescription className="text-xs">Online • Emotionally intelligent coaching</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] text-white"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Share what's on your mind..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1"
                    />
                    <Button variant="gradient" size="icon" onClick={handleSend}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Prompts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Quick Topics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(prompt)}
                      className="w-full text-left p-3 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm"
                    >
                      {prompt}
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* AI Capabilities */}
              <Card className="bg-gradient-to-br from-[hsl(0,85%,60%,0.05)] to-[hsl(30,95%,60%,0.05)]">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    AI Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MessageCircle className="w-4 h-4 text-primary mt-0.5" />
                    <span>Emotional intelligence guidance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                    <span>Pattern recognition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5" />
                    <span>Red flag detection</span>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card className="border-destructive/50">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-destructive">Important:</strong> HeartWise AI provides guidance and support, but is not a replacement for professional therapy, medical advice, or crisis intervention.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    If you're in crisis, please contact emergency services or a crisis hotline immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AICoach;
