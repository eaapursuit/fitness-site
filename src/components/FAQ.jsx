
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = ({ faqs }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg overflow-hidden mb-4 last:mb-0">
            <AccordionTrigger className="px-6 hover:no-underline bg-background/50">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
