
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">FitPro</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Elevate your fitness journey with personalized training and expert guidance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary button-hover" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary button-hover" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary button-hover" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-4">Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Personal Training</Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Group Classes</Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Nutrition Coaching</Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Online Programs</Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>123 Fitness Avenue</p>
              <p>Workout City, WC 12345</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@fitpro.com" className="hover:text-primary transition-colors">info@fitpro.com</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FitPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
