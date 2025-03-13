
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedTransition from './AnimatedTransition';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedTransition locationKey={location.pathname}>
        <main className="flex-1">
          {children}
        </main>
      </AnimatedTransition>
      <Footer />
    </div>
  );
};

export default Layout;
