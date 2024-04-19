import React from 'react';
import Front from '../Photos/Front.jpg'

function About() {
  return (
    <section className="mt-4 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={Front} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-16">
            {/* <h2 className="text-3xl font-bold mb-4 text-black">About Us</h2> */}
            <p className="mb-4 text-black font-bold">Hello, I am justin, the owner of have fun tattoo. I have been tattooing since 2004. I started in
Champaign, IL and quickly moved to Chicago where I tattooed for 15 years. I relocated to
Cleveland 5 years ago and finally decided to open my own shop in 2023. I like doing everything
from the simplest designs to large intricate work. I’ve tried to stay well rounded and offer a
variety of styles. I like doing large or small black and grey and color work. I lean a lot into bolder
and a more traditional style, but can also do delicate and fine line designs as well. I like to paint
a lot of flash and always welcome anyone who likes my original designs. I can also take your
ideas design custom work just for you. With the shop I’ve tried to create a calm and relaxed
environment that is welcoming to everyone. I like to make the process as smooth and relaxing
as possible. I strive for prompt and thorough customer care from the email and planning phase,
all the way to the aftercare. If you’d like to get something started I prefer email or direct
messaging on Instagram.</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


