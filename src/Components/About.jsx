import React from "react";
import img from "../assets/profile-5cdb43f1.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="fullscreen-div flex justify-center items-center text-white px-10 lg:px-56 py-16"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-fuchsia-500 img_glow mr-8"
      />
      <div
        data-aos="fade-right"
        className="flex flex-col justify-center items-start text-white"
      >
        <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase text-fuchsia-600 px-3">
          About me
        </h1>
        <p className="mb-8 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aspernatur ad ullam? Architecto laboriosam voluptatibus enim modi.
          Accusantium quod illo pariatur, nam mollitia eum neque minus ducimus
          debitis commodi quas.
        </p>
        <div className="flex gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2 px-4">
              <button className="px-5 neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 uppercase relative overflow-hidden">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
