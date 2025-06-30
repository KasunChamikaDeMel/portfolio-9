'use client';

import React from 'react';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Card, CardContent } from '@/components/ui/card';

export const Work = () => {
  const workImages = [
    '/images/work 1.jpg',
    '/images/work 2.jpg',
    '/images/work 3.jpg',
    '/images/work 4.jpg',
    '/images/work 5.jpg',
    '/images/work 6.jpg',
  ];

  return (
    <section className="py-20 px-6 bg-gray-50" id="work">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-5xl text-red-600 font-semibold mb-12 text-center" data-aos="fade-up" >Work</h3>

        <Carousel className="w-full max-w-6xl mx-auto rounded-2xl">
          <CarouselContent>
            {workImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-0">
                  <Card className="overflow-hidden rounded-2xl shadow-lg group p-0" data-aos="zoom-in" >
                    <CardContent className="p-0">
                      <div className="w-full h-[500px] relative">
                      <Image src={src} alt={`Work ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>


      </div>

      <div className="flex justify-center mt-10">
        <a href="https://www.sunandmoonglobal.com/gallery" target="_blank" rel="noopener noreferrer"
          className="bg-red-500 text-white px-6 py-3 rounded-3xl hover:bg-red-600 transition font-medium">
          See More
        </a>
      </div>

    </section>
  );
};
