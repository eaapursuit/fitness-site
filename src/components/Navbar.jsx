
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
    
    // Add scroll listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Determine active path for styling
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 button-hover">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">FitPro</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { title: 'Home', path: '/' },
              { title: 'About', path: '/about' },
              { title: 'Services', path: '/services' },
              { title: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`animated-underline pb-1 text-base font-medium ${isActive(item.path) ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden button-hover"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full glass px-4 py-5 shadow-lg md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {[
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Services', path: '/services' },
                { title: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-md transition-colors ${isActive(item.path) ? 'bg-primary/10 text-primary' : 'hover:bg-background/50'}`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
