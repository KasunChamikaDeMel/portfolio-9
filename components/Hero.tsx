'use client';

import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 text-black px-6" data-aos="fade-up" >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-96 h-96 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-lg">
          <Image src="/images/s2.jpg" alt="Profile" fill className="object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-6xl font-bold mb-4">
            Manura Aluthge
          </h1>
          <p className="text-xl md:text-2xl text-gray-900 max-w-xl">
            Founder / MD, Sun and Moon (pvt) Ltd
          </p>
        </div>
      </div>
    </section>
  );
};
