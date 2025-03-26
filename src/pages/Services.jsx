
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  features, 
  popular = false,
  primaryColor = false
}) => {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg relative",
      primaryColor ? "bg-primary text-primary-foreground" : "border-border/40 hover:border-primary/20",
      popular && "border-primary/50 shadow-md"
    )}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-0 -translate-y-1/2">
          <div className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Popular Choice
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className={cn(
          "text-base",
          primaryColor && "text-primary-foreground/80"
        )}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className={cn(
            "text-sm ml-2",
            primaryColor ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>/ month</span>}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={cn(
                "h-5 w-5 mr-2 flex-shrink-0",
                primaryColor ? "text-primary-foreground" : "text-primary"
              )} />
              <span className={cn(
                "text-sm",
                primaryColor ? "text-primary-foreground/90" : "text-muted-foreground"
              )}>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant={primaryColor ? "secondary" : "default"}
          className="w-full button-hover"
        >
          <Link to="/contact" className="flex items-center justify-center gap-2 w-full">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span>Services</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Fitness Services Tailored to Your Needs
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore my range of personalized fitness programs designed to help you achieve your specific health and fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Personal Training"
              description="One-on-one personalized training sessions designed to meet your specific fitness goals."
              price="$299"
              features={[
                "Initial fitness assessment",
                "Customized workout plans",
                "8 in-person training sessions",
                "Nutrition guidance",
                "Progress tracking",
                "Email support"
              ]}
            />
            
            <ServiceCard
              title="Premium Coaching"
              description="Comprehensive fitness and nutrition coaching for maximum results."
              price="$499"
              popular={true}
              primaryColor={true}
              features={[
                "Advanced fitness assessment",
                "Personalized workout programs",
                "12 in-person training sessions",
                "Detailed nutrition planning",
                "Weekly check-ins",
                "24/7 messaging support",
                "Monthly progress reviews"
              ]}
            />
            
            <ServiceCard
              title="Online Coaching"
              description="Remote coaching for those who prefer to train on their own schedule."
              price="$199"
              features={[
                "Digital fitness assessment",
                "Custom workout programs",
                "Video exercise library",
                "Basic nutrition guidelines",
                "Bi-weekly check-ins",
                "Email and chat support"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialized Services</h2>
            <p className="text-muted-foreground">
              Additional offerings to complement your fitness journey and address specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border/40 transition-all duration-300 hover:border-primary/20 hover:shadow-md">
              <CardHeader>
                <CardTitle>Nutrition Consultation</CardTitle>
                <CardDescription>Personalized nutrition guidance tailored to your body type, goals, and dietary preferences.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-6">$149</p>
                <ul className="space-y-3">
                  {[
                    "90-minute in-depth consultation",
                    "Personalized meal planning",
                    "Grocery shopping guide",
                    "Meal prep strategies",
                    "30-day follow-up session"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full button-hover">
                  <Link to="/contact" className="w-full">Book Consultation</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border border-border/40 transition-all duration-300 hover:border-primary/20 hover:shadow-md">
              <CardHeader>
                <CardTitle>Corporate Wellness</CardTitle>
                <CardDescription>Fitness programs for businesses looking to improve employee health and productivity.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-6">Custom</p>
                <ul className="space-y-3">
                  {[
                    "Group fitness classes",
                    "Health workshops and seminars",
                    "Team building fitness activities",
                    "Individual employee assessments",
                    "Progress reporting and analytics",
                    "Customized to company size and needs"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full button-hover">
                  <Link to="/contact" className="w-full">Request Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about my services and approach.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How often should we train together?",
                answer: "The frequency of training depends on your goals, current fitness level, and schedule. For most clients, I recommend 2-3 sessions per week for optimal progress, but we'll determine the best frequency for your specific situation during our initial consultation."
              },
              {
                question: "Do you provide nutrition plans?",
                answer: "Yes, nutrition guidance is included in all my coaching packages. Depending on your package, this ranges from basic guidelines to comprehensive meal plans. I also offer specialized nutrition consultations for those wanting to focus specifically on their diet."
              },
              {
                question: "What if I have an injury or medical condition?",
                answer: "Safety is my top priority. I'm experienced in working with clients who have various injuries and medical conditions. During our initial consultation, we'll discuss any concerns, and I'll design a program that works with your limitations while helping you progress safely."
              },
              {
                question: "How long before I see results?",
                answer: "Results vary based on individual factors, consistency, and goals. Most clients notice initial changes within 2-4 weeks, with more significant results after 8-12 weeks of consistent training and nutrition. We'll track your progress regularly to ensure you're moving toward your goals."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
