import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-[99] px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="w-[160px] h-auto object-contain mix-blend-multiply" style={{ clipPath: 'inset(0 0 25% 0 round 16px)' }} />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-luxury-text hover:text-luxury-gold transition-all duration-300 text-sm font-light tracking-wide relative group font-algerian"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <Button variant="luxury-outline" size="sm" className="font-algerian">
            Get Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-luxury-text hover:text-luxury-gold transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-luxury-dark/95 backdrop-blur-md border-t border-luxury-gold/20">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-luxury-text hover:text-luxury-gold transition-colors duration-300 text-sm font-light tracking-wide py-2 font-algerian"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-luxury-gold/20">
              <Button variant="luxury-outline" size="sm" className="w-full font-algerian">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
