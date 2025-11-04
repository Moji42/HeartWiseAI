import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Heart, Brain, TrendingUp, Shield, MessageCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,85%,60%,0.05)] via-[hsl(20,90%,60%,0.05)] to-[hsl(30,95%,60%,0.05)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your Relationships with{" "}
                <span className="bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] bg-clip-text text-transparent">
                  Emotional Intelligence
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                HeartWise AI combines cutting-edge artificial intelligence with proven psychological principles 
                to help you build healthier, more fulfilling relationships.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <Button variant="hero" size="xl">
                    Start Your Journey
                  </Button>
                </Link>
                <Button variant="outline" size="xl">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] rounded-3xl blur-3xl opacity-20" />
              <img 
                src={heroImage} 
                alt="Emotional connection and support" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Your Personal Relationship Coach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by advanced AI and backed by relationship psychology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle>AI-Powered Insights</CardTitle>
                <CardDescription>
                  Advanced emotional intelligence algorithms analyze patterns and provide personalized guidance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Mood Tracking</CardTitle>
                <CardDescription>
                  Monitor your emotional wellness journey with intuitive tracking and progress visualization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Get instant guidance whenever you need it with our always-available AI coaching assistant
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Guided Journaling</CardTitle>
                <CardDescription>
                  Reflect and grow with AI-guided prompts designed to deepen self-awareness
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Your data is encrypted, anonymized, and never shared. Your journey stays private
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Red Flag Detection</CardTitle>
                <CardDescription>
                  AI identifies concerning patterns and provides guidance for healthier relationship dynamics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Path to Growth</h2>
            <p className="text-lg text-muted-foreground">Start free, upgrade anytime</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Free Tier</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>5 AI coaching sessions/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Basic mood tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Journal entries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Community access</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-warm relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Full emotional intelligence coaching</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-medium">Unlimited AI coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-medium">Advanced emotional analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-medium">Personalized insights & reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-medium">Red flag detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-medium">Priority support</span>
                  </li>
                </ul>
                <Button variant="gradient" size="lg" className="w-full">
                  Start Premium Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Relationships?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands who are building healthier, more fulfilling connections with HeartWise AI
          </p>
          <Link to="/dashboard">
            <Button size="xl" className="bg-white text-primary hover:bg-white/90">
              Start Your Free Journey Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Important:</strong> HeartWise AI is a coaching tool, not a replacement for professional therapy or counseling.
          </p>
          <p>© 2024 HeartWise AI. Part of the EdVisingU ecosystem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
