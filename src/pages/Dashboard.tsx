import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Heart, TrendingUp, MessageCircle, BookOpen, Calendar, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, <span className="bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] bg-clip-text text-transparent">Sarah</span>
          </h1>
          <p className="text-muted-foreground">Here's your emotional wellness journey at a glance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">12 days</div>
              <p className="text-xs text-muted-foreground mt-1">Keep it up! 🔥</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Mood Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">8.2/10</div>
              <p className="text-xs text-muted-foreground mt-1">+0.5 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Journal Entries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">AI Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">18</div>
              <p className="text-xs text-muted-foreground mt-1">Total conversations</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/mood-tracker">
            <Card className="hover:shadow-warm transition-all cursor-pointer border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Track Your Mood</CardTitle>
                <CardDescription>
                  Log how you're feeling today and track emotional patterns
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/journal">
            <Card className="hover:shadow-warm transition-all cursor-pointer border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Write in Journal</CardTitle>
                <CardDescription>
                  Reflect on your thoughts and feelings with guided prompts
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/ai-coach">
            <Card className="hover:shadow-warm transition-all cursor-pointer border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Talk to AI Coach</CardTitle>
                <CardDescription>
                  Get personalized guidance and emotional support
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Recent Activity & Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 pb-3 border-b">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Mood logged: Happy</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New journal entry</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">AI Coaching Session</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[hsl(0,85%,60%,0.05)] to-[hsl(30,95%,60%,0.05)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-background rounded-lg border">
                <p className="text-sm font-medium mb-2">✨ Positive Pattern Detected</p>
                <p className="text-sm text-muted-foreground">
                  Your mood has improved by 15% over the past week. Great progress!
                </p>
              </div>

              <div className="p-4 bg-background rounded-lg border">
                <p className="text-sm font-medium mb-2">💡 Recommendation</p>
                <p className="text-sm text-muted-foreground">
                  You've been most positive in the mornings. Consider scheduling important conversations then.
                </p>
              </div>

              <Button variant="gradient" className="w-full">
                View Full Analysis
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
