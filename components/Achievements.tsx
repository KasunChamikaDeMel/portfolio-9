'use client';

import Image from 'next/image';

export const Achievements = () => {
  return (
    <section className="py-24 px-6 bg-gray-50" id="achievements">
      <div className="max-w-8xl mx-auto" data-aos="fade-left">
        <h3 className="text-5xl text-black font-semibold mb-16 text-center">Achievements</h3>

        <div className="grid md:grid-cols-2 gap-10">
          
          <div className="relative group rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/interior.jpg" alt="Construction Achievement" width={700} height={500}
              className="object-cover w-full h-100 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
              <h4 className="text-white text-3xl font-bold mb-3">Construction Excellence 2025</h4>
              <p className="text-gray-200 text-base">Most Promising and High Benchmark Role in Constructions of the Year 2025</p>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/award.jpg" alt="Interior Design Achievement" width={700} height={500}
              className="object-cover w-full h-100 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
              <h4 className="text-white text-3xl font-bold mb-3">Interior Design Recognition</h4>
              <p className="text-gray-200 text-base">Most Promising and High Benchmark Role in Interior Designing of the Year 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
