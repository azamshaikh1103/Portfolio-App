"use client";

import { Fade, Slide } from "react-awesome-reveal";
export const About = () => {
  return (
    <div className=" md:mt-40 lg:mt-1 mx-5" id="about">
      <Slide direction="up" duration={200}>
        <div className=" w-full text-center text-4xl font-semibold">
          About <span className=" text-purple-400">Me</span>
        </div>
      </Slide>
      <Slide direction="up" duration={200}>
        <div className=" mt-10 mx-4 py-10 px-16 text-xl bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#131728]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          repellat, quis eveniet veniam omnis enim, molestiae porro ea eum et
          qui ipsam. Nisi doloribus eius libero labore perspiciatis, accusantium
          accusamus consequatur fugiat neque omnis molestias deleniti. Repellat,
          dicta cumque tempore, ipsam aut sunt, voluptatem aperiam quia magnam
          ipsa magni fuga.
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias, asperiores!
                </p>
              </div>
            </div>

            <div className=" md:w-3/5 mt-5 md:mt-0 h-[500px] md:ml-5 flex flex-col justify-between">
              <div className=" relative bg-[#0b0d22] h-[240px] outline outline-1 outline-[#131728] rounded-xl hover:scale-x-[102%] transition-all ">
                <img
                  src="https://i.imgur.com/wUCxHVj.png"
                  alt=""
                  className=" h-full opacity-40 mix-blend-screen float-right rounded-xl"
                />
                <img
                  src="https://i.imgur.com/huMKJFE.png"
                  alt=""
                  className=" h-full md:h-auto absolute inset-0 md:mt-8 rounded-xl mix-blend-screen opacity-80 "
                />
                <span className=" absolute inset-1 w-2/5 m-5 text-2xl font-semibold">
                  I'm very flexible with time zone communications
                </span>
              </div>
              <div className=" relative bg-[#0b0d22] h-[240px] outline outline-1 outline-[#131728] rounded-xl hover:scale-x-[102%] transition-all  ">
                <img
                  src="https://i.imgur.com/F2BBsin.png"
                  alt=""
                  className=" mix-blend-screen h-full float-right opacity-45 "
                />
                <span className="absolute inset-1 w-1/3 m-5 text-4xl font-semibold ">
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
                <img src="https://i.imgur.com/gh5KFkT.png" alt="" className=" h-full mix-blend-screen " />
                <img src="https://i.imgur.com/YZ3rRRS.png" alt="" className=" absolute inset-0 mix-blend-screen w-1/2 float-end" />
              </div>
              <div className=" bg-[#0b0d22] h-[170px] outline outline-1 outline-[#131728] rounded-xl hover:scale-x-[102%] transition-all ">
                <img src="https://i.imgur.com/3yMev0x.png" alt="" className=" h-full mix-blend-screen" />
              </div>
            </div>
            <div className=" relative md:w-2/3 md:ml-5 mt-5 md:mt-0 bg-[#0b0d22] h-[360px] outline outline-1 outline-[#131728] rounded-xl hover:scale-y-[102%] transition-all ">
              <img src="https://i.imgur.com/gh5KFkT.png" alt="" className=" absolute inset-0 h-full mix-blend-screen" />
              <img src="https://i.imgur.com/RkyOZV8.png" alt="" className=" h-full float-right opacity-80" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};




// https://i.imgur.com/3yMev0x.png      ->    piche ki chamak
// https://i.imgur.com/gh5KFkT.png      ->    Grid
// https://i.imgur.com/YZ3rRRS.png      ->    Laptop
// https://i.imgur.com/RkyOZV8.png      ->    Snippets