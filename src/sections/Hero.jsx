import React from "react";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="text-white sm:text-3xl text-2xl font-medium text-center font-generalsans">
            Hi, I am Ashraful Islam <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">
            Building Products & Brands
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
