"use client";

import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { RiArrowRightSFill } from "react-icons/ri";

export const Hero = () => {
  const [imageSrc, setImageSrc] = useState("https://imgur.com/7IDJR28.jpeg");
  const hoverSrc = "https://i.imgur.com/rfyq0lt.jpeg";

  return (
    <Fade>
      <div className=" h-auto lg:mx-5 md:pt-56 py-28 flex flex-col md:flex-row justify-center md:items-center">
        <div className=" sm:h-[400px] md:w-1/3">
          <img
            alt="img"
            src={imageSrc}
            className=" outline outline-1 outline-[#131728] h-[300px] md:h-[360px] rounded-xl m-5"
            onMouseEnter={() => setImageSrc(hoverSrc)}
            onMouseLeave={() => setImageSrc("https://i.imgur.com/7IDJR28.jpeg")}
          />
        </div>
        <div className=" md:w-2/3 pl-10 h-[400px] py-10 flex flex-col">
          <div className=" font-mono">A FULL-STACK WEB DEVELOPER</div>
          <div className=" text-4xl md:text-7xl font-bold pt-3 pb-5">
            Transforming Concepts into Seamless
            <span className=" text-purple-400"> User Experiences</span>
          </div>
          <a
            href="#projects"
            className="text-lg w-fit px-10 py-4 cursor-pointer rounded-xl shadow shadow-gray-800 outline outline-1 outline-[#131728] bg-gradient-to-r from-[#282b3d] to-[#060920] flex justify-center hover:bg-gradient-to-br items-center transition delay-1000 duration-1000 ease-in-out"
          >
            See my work <RiArrowRightSFill />
          </a>
        </div>
      </div>
    </Fade>
  );
};
