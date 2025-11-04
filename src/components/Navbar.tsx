import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(30,95%,60%)] bg-clip-text text-transparent">
            HeartWise AI
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/mood-tracker" className="text-sm font-medium hover:text-primary transition-colors">
            Mood Tracker
          </Link>
          <Link to="/journal" className="text-sm font-medium hover:text-primary transition-colors">
            Journal
          </Link>
          <Link to="/ai-coach" className="text-sm font-medium hover:text-primary transition-colors">
            AI Coach
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="gradient" size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
