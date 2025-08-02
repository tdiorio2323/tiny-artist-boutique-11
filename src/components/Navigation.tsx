import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Palette } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-primary animate-wiggle" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Little Artist
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button variant="hero" size="sm" className="hidden md:flex">
            <ShoppingBag className="h-4 w-4" />
            Cart
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden mt-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-2 px-4 rounded-lg transition-colors ${
                location.pathname === item.path 
                  ? "bg-accent text-accent-foreground" 
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;