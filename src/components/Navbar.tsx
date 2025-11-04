import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

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
        
        {user ? (
          <>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <Link to="/mood-tracker">
                <Button variant="ghost" size="sm">
                  Mood Tracker
                </Button>
              </Link>
              <Link to="/journal">
                <Button variant="ghost" size="sm">
                  Journal
                </Button>
              </Link>
              <Link to="/ai-coach">
                <Button variant="ghost" size="sm">
                  AI Coach
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  logout();
                }}
              >
                Sign Out
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="hidden md:flex items-center gap-6">
              {/* Empty div to maintain layout when not signed in */}
            </div>
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="gradient" size="sm">Get Started</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
