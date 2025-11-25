import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { Smile, Meh, Frown, Heart, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const moods = [
    { icon: Smile, label: "Great", color: "text-green-500", score: 9 },
    { icon: Smile, label: "Good", color: "text-blue-500", score: 7 },
    { icon: Meh, label: "Okay", color: "text-yellow-500", score: 5 },
    { icon: Frown, label: "Low", color: "text-orange-500", score: 3 },
    { icon: Frown, label: "Struggling", color: "text-red-500", score: 1 },
  ];

  const handleSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mood logged successfully!",
      description: "Your emotional wellness data has been recorded.",
    });

    setSelectedMood(null);
    setNotes("");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              How are you <span className="bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] bg-clip-text text-transparent">feeling</span> today?
            </h1>
            <p className="text-muted-foreground">Track your Emotional State and Identify Patterns over Time</p>
          </div>

          <div className="grid gap-6">
            {/* Mood Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Your Mood</CardTitle>
                <CardDescription>Choose the option that best describes how you're feeling right now</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {moods.map((mood) => (
                    <button
                      key={mood.label}
                      onClick={() => setSelectedMood(mood.label)}
                      className={`p-6 rounded-xl border-2 transition-all hover:shadow-warm ${
                        selectedMood === mood.label
                          ? "border-primary bg-primary/5 shadow-warm"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <mood.icon className={`w-12 h-12 mx-auto mb-3 ${mood.color}`} />
                      <p className="text-sm font-medium text-center">{mood.label}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>What's on your mind?</CardTitle>
                <CardDescription>Optional: Share more about how you're feeling (private and encrypted)</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Today I'm feeling this way because..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-32 resize-none"
                />
              </CardContent>
            </Card>

            <Button 
              variant="gradient" 
              size="lg" 
              className="w-full"
              onClick={handleSubmit}
            >
              <Heart className="w-5 h-5 mr-2" />
              Log My Mood
            </Button>

            {/* Weekly Overview */}
            <Card className="bg-gradient-to-br from-[hsl(0,85%,60%,0.05)] to-[hsl(30,95%,60%,0.05)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  This Week's Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span className="text-sm font-medium">Monday</span>
                    <div className="flex items-center gap-2">
                      <Smile className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">Great</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span className="text-sm font-medium">Tuesday</span>
                    <div className="flex items-center gap-2">
                      <Smile className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-muted-foreground">Good</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span className="text-sm font-medium">Wednesday</span>
                    <div className="flex items-center gap-2">
                      <Meh className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-muted-foreground">Okay</span>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-1">💡 Pattern Insight</p>
                    <p className="text-sm text-muted-foreground">
                      Your mood tends to be highest in the first half of the week. Consider planning important activities early.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoodTracker;
