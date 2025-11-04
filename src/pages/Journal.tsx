import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { BookOpen, Sparkles, Calendar, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Journal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const prompts = [
    "What made you smile today?",
    "Describe a recent meaningful conversation",
    "What challenges are you facing in your relationships?",
    "What are you grateful for right now?",
    "How have you grown emotionally this week?",
  ];

  const recentEntries = [
    { date: "Today", title: "Reflecting on communication", preview: "I noticed that when I take a pause before responding..." },
    { date: "Yesterday", title: "Gratitude practice", preview: "Today I'm grateful for the small moments of connection..." },
    { date: "Dec 1", title: "Setting boundaries", preview: "Learning to say no has been challenging but necessary..." },
  ];

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both title and content are required",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Journal entry saved!",
      description: "Your thoughts have been securely recorded.",
    });

    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Your <span className="bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] bg-clip-text text-transparent">Personal</span> Journal
            </h1>
            <p className="text-muted-foreground">A safe space for your thoughts, feelings, and reflections</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Journal Editor */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    New Entry
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Lock className="w-3 h-3" />
                    Private and encrypted - only you can read this
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Entry title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-lg font-medium"
                  />
                  
                  <Textarea
                    placeholder="Write your thoughts here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-96 resize-none text-base"
                  />

                  <div className="flex justify-between items-center pt-4">
                    <span className="text-sm text-muted-foreground">
                      {content.length} characters
                    </span>
                    <Button variant="gradient" onClick={handleSave}>
                      Save Entry
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Entries */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Recent Entries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentEntries.map((entry, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 rounded-lg border hover:border-primary/50 hover:shadow-warm transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{entry.title}</h3>
                        <span className="text-xs text-muted-foreground">{entry.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{entry.preview}</p>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Prompts */}
              <Card className="bg-gradient-to-br from-[hsl(0,85%,60%,0.05)] to-[hsl(30,95%,60%,0.05)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Writing Prompts
                  </CardTitle>
                  <CardDescription>
                    AI-suggested prompts to inspire reflection
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {prompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setContent(content + (content ? "\n\n" : "") + prompt + "\n\n")}
                      className="w-full text-left p-3 rounded-lg bg-background hover:bg-primary/5 border hover:border-primary/50 transition-all text-sm"
                    >
                      {prompt}
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">This Month</span>
                      <span className="text-sm font-medium">24 entries</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] h-2 rounded-full w-4/5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Streak</span>
                      <span className="text-sm font-medium">12 days 🔥</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Total Words</span>
                      <span className="text-sm font-medium">18,432</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Journal;
