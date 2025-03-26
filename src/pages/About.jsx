
import { Activity, Award, BookOpen, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span>About Me</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Hi, I'm <span className="text-primary">Alex</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                With over 10 years of experience in personal training and fitness coaching, I'm dedicated to helping clients achieve their fitness goals through personalized training programs and unwavering support.
              </p>
              <div className="pt-4">
                <Button>
                  <Link to="/contact" className="flex items-center gap-2">
                    Work With Me
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted/50">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fitness Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary rounded-3xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">My Fitness Journey</h2>
            <p className="text-muted-foreground">
              My path to becoming a fitness professional was shaped by personal transformation and a passion for helping others.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Where It All Began</h3>
              <p className="text-muted-foreground">
                My fitness journey began when I was struggling with my own health and wellbeing. After transforming my own life through consistent training and proper nutrition, I discovered my passion for helping others achieve similar results.
              </p>
              <p className="text-muted-foreground">
                This personal experience gives me a unique perspective on the challenges and obstacles my clients face, allowing me to provide genuinely empathetic guidance.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Philosophy</h3>
              <p className="text-muted-foreground">
                I believe that fitness is more than just physical appearance—it's about building strength, confidence, and habits that enhance your entire life. My approach focuses on sustainable changes that lead to long-term results, not quick fixes.
              </p>
              <p className="text-muted-foreground">
                Every client receives a customized program tailored to their unique body, goals, and lifestyle, because there's no one-size-fits-all in fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Certifications & Expertise</h2>
            <p className="text-muted-foreground">
              My credentials reflect my commitment to providing expert, up-to-date fitness guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Medal className="h-10 w-10 text-primary" />,
                title: "Certified Personal Trainer",
                description: "NASM Certified Personal Trainer with specialization in performance enhancement."
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Nutrition Coach",
                description: "Precision Nutrition Level 2 Coach with expertise in meal planning and nutritional guidance."
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Strength Specialist",
                description: "Certified Strength and Conditioning Specialist focusing on optimal performance."
              },
              {
                icon: <Activity className="h-10 w-10 text-primary" />,
                title: "Corrective Exercise",
                description: "Specialized in identifying and correcting movement patterns to prevent injury."
              }
            ].map((qualification, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border/40 transition-all duration-300 hover:border-primary/20 hover:shadow-md">
                <div className="mb-4">{qualification.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{qualification.title}</h3>
                <p className="text-muted-foreground">{qualification.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
