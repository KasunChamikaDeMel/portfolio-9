'use client';

import Image from 'next/image';

export const Achievements = () => {
  return (
    <section className="py-24 px-6 bg-gray-50" id="achievements">
      <div className="max-w-8xl mx-auto">
        <h3 className="text-5xl text-red-600 font-semibold mb-16 text-center" data-aos="fade-up">Achievements</h3>

        <div className="grid md:grid-cols-2 gap-10">
          
          <div className="relative group rounded-2xl overflow-hidden shadow-xl" data-aos="zoom-in-up">
            <Image src="/images/award.jpg" alt="Construction Achievement" width={700} height={500}
              className="object-cover w-full h-100 group-hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-xl" data-aos="zoom-in-up">
            <Image src="/images/interior.jpg" alt="Interior Design Achievement" width={700} height={500}
              className="object-cover w-full h-100 group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

