import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CardData = {
  id: number;
  title: string;
  description: string;
  content: string;
  badge: string;
  link: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Card Title 1",
    description: "This is a description for card 1.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Etdolorem labore dignissimos laborum modi tempore veniam aliquid, molestiae nemo excepturi ducimus officiis iusto. Hic laborum laboriosam repellat rem nihil porro.",
    badge: "Featured",
    link: "#",
  },
  {
    id: 2,
    title: "Card Title 2",
    description: "This is a description for card 2.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Etdolorem labore dignissimos laborum modi tempore veniam aliquid, molestiae nemo excepturi ducimus officiis iusto. Hic laborum laboriosam repellat rem nihil porro.",

    badge: "New",
    link: "#",
  },
  {
    id: 3,
    title: "Card Title 3",
    description: "This is a description for card 3.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Etdolorem labore dignissimos laborum modi tempore veniam aliquid, molestiae nemo excepturi ducimus officiis iusto. Hic laborum laboriosam repellat rem nihil porro.",

    badge: "Popular",
    link: "#",
  },
  {
    id: 4,
    title: "Card Title 4",
    description: "This is a description for card 4.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Etdolorem labore dignissimos laborum modi tempore veniam aliquid, molestiae nemo excepturi ducimus officiis iusto. Hic laborum laboriosam repellat rem nihil porro.",
    badge: "Featured",
    link: "#",
  },
  {
    id: 5,
    title: "Card Title 5",
    description: "This is a description for card 5.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Etdolorem labore dignissimos laborum modi tempore veniam aliquid, molestiae nemo excepturi ducimus officiis iusto. Hic laborum laboriosam repellat rem nihil porro.",

    badge: "New",
    link: "#",
  },
  {
    id: 6,
    title: "Card Title 6",
    description: "This is a description for card 6.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Etdolorem labore dignissimos laborum modi tempore veniam aliquid, molestiae nemo excepturi ducimus officiis iusto. Hic laborum laboriosam repellat rem nihil porro.",

    badge: "Popular",
    link: "#",
  },
];

export default function Cards() {
  return (
    <div
      id="card"
      className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg"
    >
      <div className="flex flex-col text-center justify-center items-center">
        <Badge className="mb-4">Cards</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Reusable Card Components
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Easily build reusable and customizable card components.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 lg:mt-12 max-w-6xl mx-auto">
        {cardData.map((card) => (
          <Card key={card.id} className="p-6 rounded-lg dark:bg-zinc-950">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {card.content}
              </p>
            </CardContent>
            <CardFooter className="space-x-2">
              <Link href={card.link}>
                <Button variant="outline" className="mt-4">
                  Learn More
                </Button>
              </Link>
              <Link href={card.link}>
                <Button className="mt-4">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
