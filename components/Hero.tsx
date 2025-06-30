'use client';

import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] relative rounded-full overflow-hidden shadow-2xl">
          <Image src="/images/s1.jpg" alt="Profile" fill className="object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-6xl text-red-600 font-mono font-bold tracking-wider mb-4">
            Manura Aluthge
          </h1>
          <p className="text-xl md:text-2xl text-black font-bold max-w-2xl">
            Founder & Managing Director, Sun and Moon (pvt) Ltd
          </p>
        </div>
      </div>
    </section>
  );
};
