'use client';

import Image from 'next/image';

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gray-50" id="contact">
      <div className="max-w-xl mx-auto text-center" data-aos="fade-up">
        <h3 className="text-4xl font-semibold mb-6 text-black">Contact</h3>
        <p className="text-gray-700 text-lg mb-8">
          Feel free to reach out through any of the methods below.
        </p>

        <div className="space-y-4 text-md text-gray-800 mb-12">
          <p>
            <strong>Email: </strong>
            <a href="mailto:manuraaluthge@gmail.com" className="text-teal-500">
              manuraaluthge@gmail.com
            </a>
          </p>
          <p>
            <strong>WhatsApp: </strong>
            <a href="https://wa.me/94701234567" className="text-teal-500">
              070 123 4567
            </a>
          </p>
          <p>
            <strong>Message: </strong>
            <a href="mailto:manuraaluthge@gmail.com" className="text-teal-500">
              Send a message
            </a>
          </p>
          <p>
            <strong>Location: </strong>
            <a href="#" className="text-teal-500">
              Colombo, Sri Lanka
            </a>
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex rounded-full overflow-hidden border border-gray-300 bg-white text-black divide-x divide-gray-300">
            <a
              href="https://facebook.com/ManuraAluthge" target="_blank" rel="noopener noreferrer"
              className="flex items-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <Image src="/icons/fb.png" alt="Facebook" width={24} height={24} />
            </a>

            <a
              href="https://instagram.com/ManuraAluthge" target="_blank" rel="noopener noreferrer"
              className="flex items-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <Image src="/icons/ig.png" alt="Instagram" width={24} height={24} />
            </a>

            <a
              href="https://tiktok.com/@ManuraAluthge" target="_blank" rel="noopener noreferrer"
              className="flex items-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <Image src="/icons/tiktok.png" alt="TikTok" width={24} height={24} />
            </a>

            <a
              href="https://youtube.com/@ManuraAluthge" target="_blank" rel="noopener noreferrer"
              className="flex items-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <Image src="/icons/youtube.png" alt="YouTube" width={24} height={24} />
            </a>

            <a
              href="https://linkedin.com/in/ManuraAluthge" target="_blank" rel="noopener noreferrer"
              className="flex items-center px-5 py-3 hover:bg-gray-100 transition"
            >
              <Image src="/icons/li.png" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
