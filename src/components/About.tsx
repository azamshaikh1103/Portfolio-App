"use client";

import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { MdContentCopy } from "react-icons/md";

const Shine = "https://i.imgur.com/3yMev0x.png";
const Grid = "https://i.imgur.com/gh5KFkT.png";
const VectScreen = "https://i.imgur.com/YZ3rRRS.png";
const CodeSnip = "https://i.imgur.com/RkyOZV8.png";

export const About = () => {
  const [copy, setCopy] = useState("Copy my email address");
  return (
    <div className=" md:mt-40 lg:mt-1 mx-5" id="about">
      <Slide direction="up" duration={200}>
        <div className=" w-full text-center text-4xl font-semibold">
          About <span className=" text-purple-400">Me</span>
        </div>
      </Slide>
      <Slide direction="up" duration={200}>
        <div className=" mt-10 md:mx-4 py-10 px-5 md:px-16 text-sm md:text-xl bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#131728]">
          Hello, I'm Azam, a passionate web developer from India. Proficient in
          the MERN stack, TypeScript, and Next.js, I create dynamic and
          user-friendly websites. With a touch of DevOps knowledge, I ensure
          smooth deployments. Constantly learning and evolving, I'm dedicated to
          bringing innovative web solutions to life. Let's create something
          amazing together!
        </div>
      </Slide>

      <div className=" mt-20 h-auto mx-5">
        <Fade duration={500} delay={200}>
          <div className=" flex flex-col md:flex-row justify-center">
            <div className="relative md:w-2/5 h-[500px] hover:scale-y-[102%] transition-all">
              <img
                src="https://i.imgur.com/fwLz9EI.jpeg"
                alt=""
                className="rounded-xl outline outline-1 outline-[#131728] w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-center">
                <p className="bg-black bg-opacity-30 w-full text-lg px-10 font-semibold text-center text-white py-12 rounded-xl backdrop-blur-sm">
                  I am a web developer. I love building dynamic websites and
                  coding late nights!
                </p>
              </div>
            </div>

            <div className=" md:w-3/5 mt-5 md:mt-0 h-[500px] md:ml-5 flex flex-col justify-between">
              <div className=" relative bg-[#0b0d22] h-[240px] outline outline-1 outline-[#131728] rounded-xl hover:scale-x-[102%] transition-all ">
                <img
                  src="https://i.imgur.com/wUCxHVj.png"
                  className=" h-full opacity-40 mix-blend-screen float-right rounded-xl"
                />
                <img
                  src="https://i.imgur.com/huMKJFE.png"
                  className=" h-full absolute inset-0 bottom-0 right-0 rounded-xl mix-blend-screen opacity-80 "
                />
                <span className=" absolute inset-1 w-2/5 m-5 text-2xl font-semibold">
                  I'm very flexible with time zone communications
                </span>
              </div>
              <div className=" relative bg-[#0b0d22] h-[240px] outline outline-1 outline-[#131728] rounded-xl hover:scale-x-[102%] transition-all  ">
                <img
                  src="https://i.imgur.com/F2BBsin.png"
                  className=" mix-blend-screen h-full float-right opacity-45 "
                />
                <img
                  src={Grid}
                  alt=""
                  className=" absolute h-full mix-blend-screen opacity-60"
                />
                <span className="absolute inset-1  w-1/3 m-5 text-4xl font-semibold ">
                  <p className=" text-sm mt-8 font-normal">
                    I constantly try to improve
                  </p>
                  My Tech Stack
                </span>
              </div>
            </div>
          </div>
        </Fade>

        <Fade duration={500} delay={200}>
          <div className=" mt-7 flex flex-col md:flex-row justify-center">
            <div className=" md:w-1/3 h-[360px] flex flex-col justify-between">
              <div className=" relative bg-[#0b0d22] h-[170px] outline outline-1 outline-[#131728] rounded-xl hover:scale-x-[102%] transition-all ">
                <img
                  src={Grid}
                  className=" absolute inset-0 h-full mix-blend-screen "
                />
                <img
                  src={VectScreen}
                  className=" mix-blend-screen w-1/2 absolute right-0 bottom-0 float-end"
                />
                <span className=" absolute inset-x-0 top-7 text-start text-xl font-semibold px-7">
                  Tech enthusiast with a passion for development
                </span>
              </div>
              <div className="relative bg-[#0b0d22] h-[170px] outline outline-1 outline-[#131728] rounded-xl hover:scale-x-[102%] transition-all text-center ">
                <img
                  src={Shine}
                  className=" absolute inset-0 h-full mix-blend-screen rounded-xl"
                />
                <div className=" absolute inset-x-0 top-5 flex flex-col items-center text-xl font-semibold px-7 ">
                  <span>Do you want to start a project together?</span>
                  <div
                    className=" w-full sm:w-3/5 md:mt-2 md:w-full lg:w-3/5 lg:mt-5 text-center flex justify-start items-center text-sm mt-5 px-5 py-4 bg-slate-900 rounded-xl cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText("azamshaikh1103@gmail.com");
                      setCopy("Copied");
                      setTimeout(() => {
                        setCopy("Copy my email address");
                      }, 10000);
                    }}
                  >
                    <span className=" w-5">
                      <MdContentCopy />
                    </span>
                    {copy}
                  </div>
                </div>
              </div>
            </div>

            <div className=" relative md:w-2/3 md:ml-5 mt-5 md:mt-0 bg-[#0b0d22] h-[360px] outline outline-1 outline-[#131728] rounded-xl hover:scale-y-[102%] transition-all ">
              <img
                src={Grid}
                className=" absolute inset-0 h-full mix-blend-screen"
              />
              <img src={CodeSnip} className=" h-full float-right opacity-80" />
              <div className=" absolute inset-y-0 top-32 ml-6 w-1/2 ">
                <p className=" font-light">THE INSIDE SCOOP</p>
                <span className=" text-4xl font-semibold">
                  Currently building YT integreted app
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
