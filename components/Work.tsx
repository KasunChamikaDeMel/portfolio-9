export const Work = () => {
  return (
    <section className="py-20 px-6 bg-gray-50" id="work">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl text-black font-semibold mb-12 text-center" data-aos="fade-up">Work</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-300 p-6 rounded-2xl shadow-lg" data-aos="zoom-in">
            <h4 className="text-2xl text-black font-bold mb-2">Topic 1</h4>
            <p className="text-white mb-4"> Paragraph 1</p>
            <a href="#" className="text-teal-400 hover:underline">View Details →</a>
          </div>
          <div className="bg-gray-300 p-6 rounded-2xl shadow-lg" data-aos="zoom-in">
            <h4 className="text-2xl text-black font-bold mb-2">Topic 2</h4>
            <p className="text-white mb-4">Paragraph 2</p>
            <a href="#" className="text-teal-400 hover:underline">View Details →</a>
          </div>
          <div className="bg-gray-300 p-6 rounded-2xl shadow-lg" data-aos="zoom-in">
            <h4 className="text-2xl text-black font-bold mb-2">Topic 3</h4>
            <p className="text-white mb-4">Paragraph 3</p>
            <a href="#" className="text-teal-400 hover:underline">View Details →</a>
          </div>
        </div>
      </div>
    </section>
  );
};
