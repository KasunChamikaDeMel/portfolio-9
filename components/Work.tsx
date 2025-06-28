'use client';

import Image from 'next/image';

export const Work = () => {
  return (
    <section className="py-20 px-6 bg-gray-50" id="work">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl text-black font-semibold mb-12 text-center" data-aos="fade-up">
          Work
          <p className="text-xl font-light">Interior Designs and Constructions Done</p>
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="relative group rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
            <Image src="/images/work 1.jpg" alt="Work 1" width={600} height={400}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
            <Image src="/images/work 2.jpg" alt="Work 2" width={600} height={400}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
            <Image src="/images/work 3.jpg" alt="Work 3" width={600} height={400}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
            <Image src="/images/work 4.jpg" alt="Work 4" width={600} height={400}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
            <Image src="/images/work 5.jpg" alt="Work 5" width={600} height={400}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
            <Image src="/images/work 6.jpg" alt="Work 6" width={600} height={400}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a href="https://www.sunandmoonglobal.com/" target="_blank" rel="noopener noreferrer"
        className="bg-teal-500 text-white px-6 py-3 rounded-3xl hover:bg-teal-600 transition font-medium"
        >
        See More
        </a>
      </div>
    </section>
  );
};
