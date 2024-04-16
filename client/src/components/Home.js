import React from 'react';
import Exterior from '../Photos/Exterior.jpg';

function Home() {
  return (
    <div className="mask-container" style={{ marginLeft: '-50px' }}>
      <section className="py-12 bg-feee0c">
        <div className="container mx-auto text-center">
          <div className="max-w-lg mx-auto relative" style={{ marginLeft: '50px' }}>
            <img src={Exterior} alt="exterior" className="w-full rounded-lg" />
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1600"
            >
              <defs>
                <mask id="mask" x="0" y="0" width="1200" height="1800">
                  <rect x="0" y="0" width="1200" height="1600" fill="#ffffff" />
                  <circle cx="400" cy="400" r="300" fill="#000000" />
                  <circle cx="800" cy="400" r="300" fill="#000000" />
                  <circle cx="400" cy="800" r="300" fill="#000000" />
                  <circle cx="800" cy="800" r="300" fill="#000000" />
                  <circle cx="400" cy="1200" r="300" fill="#000000" />
                  <circle cx="800" cy="1200" r="300" fill="#000000" />
                </mask>
              </defs>
              <rect x="0" y="0" width="1200" height="1800" fill="#feee0c" mask="url(#mask)" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;







