
import { ArrowRight, Dumbbell, Heart, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span>Transform Your Fitness Journey</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Achieve Your Best Self Through <span className="text-primary">Expert Training</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Personalized fitness programs designed to help you reach your goals, 
              whether you're just starting or looking to level up.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="button-hover">
                <Link to="/services" className="flex items-center gap-2">
                  Explore Services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="button-hover">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-60 animate-pulse-subtle"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl opacity-60 animate-pulse-subtle"></div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Me</h2>
            <p className="text-muted-foreground">
              Dedicated to providing a holistic approach to fitness that transforms not just bodies, but lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="h-10 w-10 text-primary" />,
                title: "Expert Training",
                description: "Certified personal trainer with years of experience creating customized fitness plans."
              },
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Holistic Approach",
                description: "Focus on overall wellbeing, combining exercise, nutrition, and mindfulness practices."
              },
              {
                icon: <Activity className="h-10 w-10 text-primary" />,
                title: "Results Driven",
                description: "Track your progress with measurable goals and regular assessments to ensure success."
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Supportive Community",
                description: "Join a community of like-minded individuals on similar fitness journeys."
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-border/40 transition-all duration-300 hover:border-primary/20 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step toward a stronger, healthier you today.
            </p>
            <Button size="lg" className="button-hover">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
