
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTransitionProps {
  children: React.ReactNode;
  locationKey: string;
  className?: string;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({ 
  children, 
  locationKey,
  className
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation when component mounts or key changes
    const element = nodeRef.current;
    if (element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(10px)';
      
      // Trigger animation after a minimal delay to ensure styles are applied
      const timer = setTimeout(() => {
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [locationKey]);

  return (
    <div 
      ref={nodeRef}
      className={cn("pt-20", className)}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
