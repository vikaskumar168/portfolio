import React from "react";

const Services = () => {
  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        dats-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800"
      >
        Services
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[60px] justify-around">
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          HTML
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          CSS
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          JavaScript
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          ReactJS
        </h2>
      </div>
    </div>
  );
};

export default Services;
