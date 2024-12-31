import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Testimonial = {
  message: string;
  name: string;
  position: string;
  image: string;
  avatarImage: string;
  avatarFallback: string;
};

const testimonials: Testimonial[] = [
  {
    message: "This service has exceeded my expectations. Highly recommended!",
    name: "Jane Doe",
    position: "CEO, Example Inc.",
    image: "/images/jane-doe.jpg",
    avatarImage: "/images/jane-avatar.jpg",
    avatarFallback: "JD",
  },
  {
    message:
      "Incredible experience! The team is professional, skilled and communicative.",
    name: "John Smith",
    position: "CTO, TechWorld",
    image: "/images/john-smith.jpg",
    avatarImage: "/images/john-avatar.jpg",
    avatarFallback: "JS",
  },
  {
    message:
      "Amazing quality and support. Would definitely work with them again.",
    name: "Emily Davis",
    position: "Product Manager, Startup Hub",
    image: "/images/emily-davis.jpg",
    avatarImage: "/images/emily-avatar.jpg",
    avatarFallback: "ED",
  },
  {
    message: "This service has exceeded my expectations. Highly recommended!",
    name: "Jane Doe",
    position: "CEO, Example Inc.",
    image: "/images/emily-davis.jpg",
    avatarImage: "/images/emily-avatar.jpg",
    avatarFallback: "ED",
  },
  {
    message:
      "Incredible experience! The team is professional, communicative and skilled.",
    name: "John Smith",
    position: "CTO, TechWorld",
    image: "/images/john-smith.jpg",
    avatarImage: "/images/john-avatar.jpg",
    avatarFallback: "JS",
  },
  {
    message:
      "Amazing quality and support. Would definitely work with them again.",
    name: "Emily Davis",
    position: "Product Manager, Startup Hub",
    image: "/images/jane-doe.jpg",
    avatarImage: "/images/jane-avatar.jpg",
    avatarFallback: "JD",
  },
];

export default function Testimonials() {
  return (
    <div className="p-6 lg:p-12 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col text-center justify-center items-center">
        <Badge>Testimonials</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-zinc-950 dark:text-zinc-50 mt-4 lg:mt-6">
          Our Clients Say
        </h1>
        <p className="leading-7 mt-6 text-gray-600 dark:text-gray-300">
          Hear what our satisfied clients have to say about our work and
          dedication.
        </p>
      </div>
      <div className="mt-8">
        <Carousel
          className="w-full max-w-4xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 shadow-lg max-w-md">
                  <div className="flex flex-col items-center text-center">
                    <Avatar>
                      {/* <AvatarImage
                        src={testimonial.avatarImage}
                        alt={testimonial.name}
                      /> */}
                      <AvatarFallback>
                        {testimonial.avatarFallback}
                      </AvatarFallback>
                    </Avatar>
                    <p className="leading-7 mt-6 text-gray-600 dark:text-gray-300">
                      {testimonial.message}
                    </p>
                    <div className="mt-4">
                      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        {testimonial.name}
                      </h3>
                      <small className="text-sm font-medium leading-none">
                        {testimonial.position}
                      </small>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
