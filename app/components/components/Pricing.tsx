import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

type PricingPlan = {
  category: string;
  description: string;
  price: string;
  buttonLabel: string;
  buttonUrl: string;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    category: "Starter",
    description: "Perfect for individuals starting their journey.",
    price: "$10/month",
    buttonLabel: "Get Started",
    buttonUrl: "/starter",
    features: ["Basic analytics", "Email support", "10 GB storage"],
  },
  {
    category: "Pro",
    description: "Ideal for growing businesses and teams.",
    price: "$30/month",
    buttonLabel: "Get Started",
    buttonUrl: "/pro",
    features: ["Advanced analytics", "Priority support", "100 GB storage"],
  },
  {
    category: "Enterprise",
    description: "Custom solutions for large-scale needs.",
    price: "Contact us",
    buttonLabel: "Contact Sales",
    buttonUrl: "/enterprise",
    features: ["Unlimited analytics", "Dedicated support", "Custom storage"],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col text-center justify-center items-center">
          <Badge>Pricing</Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-800 dark:text-gray-100 mt-4 lg:mt-6">
            Choose the Right Plan for You
          </h1>
          <p className="leading-7 mt-6 text-gray-600 dark:text-gray-300">
            Flexible pricing plans tailored to your needs.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.category}
              className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg text-center bg-white dark:bg-zinc-950"
            >
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {plan.category}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {plan.description}
              </p>
              <p className="leading-7 text-lg font-bold [&:not(:first-child)]:my-6">
                {plan.price}
              </p>
              <ul className="mt-4 text-zinc-950 dark:text-zinc-50 space-y-2">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center text-center space-x-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.buttonUrl}>
                <Button variant="default" className="mt-6 w-full">
                  {plan.buttonLabel}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
