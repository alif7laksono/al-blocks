import React from "react";
import { Badge } from "@/components/ui/badge";
import { DollarSign, UserPlus, TrendingUp, BarChart } from "lucide-react";

type Stat = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
};

const stats: Stat[] = [
  {
    title: "Total Revenue",
    value: "$120,000",
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
    description: "Total revenue generated this month",
  },
  {
    title: "New Customers",
    value: 350,
    icon: <UserPlus className="w-6 h-6 text-blue-500" />,
    description: "Customers acquired this month",
  },
  {
    title: "Conversion Rate",
    value: "4.5%",
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
    description: "Percentage of successful conversions",
  },
  {
    title: "Avg Order Daily",
    value: 25,
    icon: <BarChart className="w-6 h-6 text-purple-500" />,
    description: "Average daily orders",
  },
];

export default function Stats() {
  return (
    <div className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col text-center justify-center items-center mx-auto">
        <Badge>Stats</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-2 lg:mt-4">
          Performance Overview
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A detailed view of your business performance metrics
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg"
          >
            <div className="mb-4">{stat.icon}</div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {stat.title}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">{stat.value}</p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
