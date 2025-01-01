import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee for all purchases. If you're not satisfied, contact us within this time frame.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 2–5 business days, depending on your location.",
  },
  {
    question: "Do you offer customization options?",
    answer:
      "Yes, we provide a range of customization options to meet your needs. Contact us for more details.",
  },
  {
    question: "Are there any discounts for bulk purchases?",
    answer:
      "Yes, we offer discounts for bulk orders. Please reach out to our sales team for a quote.",
  },
  {
    question: "Can I update my order after placing it?",
    answer:
      "Yes, you can update your order within 24 hours of placing it. Contact our support team to make changes.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our support team is available 24/7 to assist you with any issues or inquiries.",
  },
];

export default function Faq2() {
  return (
    <div id="faq2" className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 max-w-6xl mx-auto">
        <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <Badge>Faqs 2</Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-zinc-950 dark:text-zinc-50 mt-4 lg:mt-6">
            Frequently Asked Questions
          </h1>
          <p className="leading-7 mt-4 text-zinc-600 dark:text-zinc-400">
            Find answers to common questions below. If you need further
            assistance, feel free to contact us.
          </p>
        </div>

        <div className="lg:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 dark:text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
