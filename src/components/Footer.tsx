"use client";

import { RiArrowRightSFill } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";

export const Footer = () => {
  return (
    <>
      <Fade duration={700} delay={400}>
        <div className=" mt-32 mx-10 relative h-auto flex flex-col justify-center items-center">
          <div className=" md:w-1/2 text-5xl font-semibold text-center">
            Ready to take <span className=" text-purple-400">your</span> digital
            presence to the next level?
          </div>
          <div className="text-lg w-fit mt-14 md:mt-10 px-10 py-4 cursor-pointer rounded-xl shadow shadow-gray-800 outline outline-1 outline-[#131728] bg-gradient-to-r from-[#282b3d] to-[#060920] flex justify-center hover:bg-gradient-to-br items-center transition delay-1000 duration-1000 ease-in-out">
            Connect Me Now <RiArrowRightSFill />
          </div>
          <div className=" mt-32 w-full text-slate-600 text-sm flex justify-between">
            <div>Need code? &copy; Source code on github</div>
            <div className=" flex">
              <a href="https://www.instagram.com/azamthefirst" target="_blank">
                <img
                  src="https://img.icons8.com/?size=100&id=32320&format=png&color=000000"
                  className=" h-5 w-5 bg-white"
                />
              </a>
              <a href="https://x.com/azamshaikh1103" target="_blank">
                <img
                  src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000"
                  className=" h-5 w-5 bg-white"
                />
              </a>
              <a href="https://discord.com/invite/Xtsgh66R" target="_blank">
                <img
                  src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000"
                  className=" h-5 w-5 bg-white"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/azamalishaikh"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
                  className=" h-5 w-5 bg-white"
                />
              </a>
              <a href="https://github.com/azamshaikh1103" target="_blank">
                <img
                  src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
                  className=" h-5 w-5 bg-white"
                />
              </a>
              <a
                href="https://github.com/azamshaikh1103/Portfolio-App"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=2778&format=png&color=000000"
                  className=" h-5 w-5 bg-white"
                />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
