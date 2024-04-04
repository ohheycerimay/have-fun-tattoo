// About.js
import React from 'react';

function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="about-image.jpg" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec diam nisi. Mauris ullamcorper posuere sem, eget venenatis lorem aliquet ac.</p>
            <p className="mb-4">Nulla facilisi. Curabitur interdum consequat dolor, nec congue magna dapibus in. Vivamus gravida eros ut leo fermentum dapibus. Duis sit amet sollicitudin tortor.</p>
            <a href="#" className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


