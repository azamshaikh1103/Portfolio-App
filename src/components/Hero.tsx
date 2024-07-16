"use client";

import { Fade } from "react-awesome-reveal";
import { RiArrowRightSFill } from "react-icons/ri";

export const Hero = () => {
  return (
    <Fade>
      <div className=" h-auto lg:mx-5 pt-56 py-28 flex flex-col md:flex-row justify-center md:items-center">
        <div className=" h-[400px] md:w-1/3">
          <div className=" bg-gradient-to-r from-[#070a1f] via-[#191c28] outline outline-1 outline-[#131728] h-[360px] rounded-xl m-5"></div>
        </div>
        <div className=" md:w-2/3 pl-10 h-[400px] py-10 flex flex-col">
          <div>A FULL-STACK WEB DEVELOPER</div>
          <div className=" text-5xl sm:text-7xl font-bold pt-3 pb-5">
            Transforming Concepts into Seamless
            <span className=" text-purple-400"> User Experiences</span>
          </div>
          <div className="text-lg w-fit px-10 py-4 cursor-pointer rounded-xl shadow shadow-gray-800 outline outline-1 outline-[#131728] bg-gradient-to-r from-[#282b3d] to-[#060920] flex justify-center hover:bg-gradient-to-br items-center transition delay-1000 duration-1000 ease-in-out">
            See my work <RiArrowRightSFill />
          </div>
        </div>
      </div>
    </Fade>
  );
};
