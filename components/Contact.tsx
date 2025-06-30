'use client';

import Image from 'next/image';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center" data-aos="fade-up">
        <div className="space-y-8">
          <h3 className="text-5xl font-serif font-bold italic text-red-600 tracking-wider">Contact</h3>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-xl">
            Feel free to get in touch via email, WhatsApp, or phone.
            I’m always happy to connect and discuss ideas or opportunities.
          </p>

          <div className="space-y-6 text-2xl text-gray-800 font-light">
            <p>
              <strong className="text-red-600 ">Email: </strong>
              <a href="mailto:manuraaluthge@gmail.com" className="font-semibold italic underline hover:text-red-500 transition">
                manuraaluthge@gmail.com
              </a>
            </p>

            <p>
              <strong className="text-red-600">Email: </strong>
              <a href="mailto:manuraaluthge@gmail.com" className="font-semibold italic underline hover:text-red-500 transition">
                md@sunandmoonglobal.com
              </a>
            </p>

            <p>
              <strong className="text-red-600">WhatsApp: </strong>
              <a href="https://wa.me/94773433747" className="italic font-semibold underline hover:text-red-500 transition" >
                077 343 3747
              </a>
            </p>

            <p>
              <strong className="text-red-600">Official: </strong>
              <a href="tel:+94113437672" className="font-semibold italic underline hover:text-red-500 transition">
                +94 11 343 7672
              </a>
            </p>

            <p>
              <strong className="text-red-600">Location: </strong>
              <a href="https://www.google.com/maps/place/125,+1B+Old+Kottawa+Rd,+Pannipitiya+10280/@6.8566372,79.9165748,21z/data=!4m5!3m4!1s0x3ae25a807d4d42ef:0x8d289f965a7713ef!8m2!3d6.8566721!4d79.9165186?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"
              className="font-semibold italic text-black underline hover:text-red-500 transition" >
                125, 1B Old Kottawa Rd, Pannipitiya 10280
              </a>
            </p>
            
          </div>
        </div>

        <div className="flex justify-center md:justify-center">
          <div className="flex flex-col items-center space-y-8">
            <a href="https://www.facebook.com/manura.aluthge/" target="_blank" rel="noopener noreferrer"
              className="bg-white p-6 rounded-full shadow-xl hover:shadow-red-300 hover:bg-red-50 transition">
              <Image src="/icons/fb.png" alt="Facebook" width={50} height={50} />
            </a>

            <a href="https://lk.linkedin.com/in/manura-aluthge-a3214313a" target="_blank" rel="noopener noreferrer"
              className="bg-white p-6 rounded-full shadow-xl hover:shadow-red-300 hover:bg-red-50 transition">
              <Image src="/icons/li.png" alt="LinkedIn" width={50} height={50} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
