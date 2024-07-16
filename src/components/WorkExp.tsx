"use client";

import { Slide } from "react-awesome-reveal";

export const WorkExp = () => {
  return (
    <>
      <div className=" mt-32 mx-10 h-auto" id="exps">
        <Slide direction="up" duration={300} delay={200}>
          <div className=" text-4xl font-semibold text-center">
            My <span className=" text-purple-400">Work Experiences</span>
          </div>
        </Slide>
        <div className=" mt-16 grid grid-cols-1">
          <ExpCard />
          <ExpCard />
        </div>
      </div>
    </>
  );
};

const ExpCard = () => {
  return (
    <>
      <Slide>
        <div className=" mx-4 my-4 h-32 bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#131728] flex justify-center items-center">
          <div className=" w-1/5 flex justify-center items-center">logo</div>
          <div className=" w-4/5 mr-5">
            <div className=" text-xl font-semibold">
              Internship in Web dev and Cloud computing
            </div>
            <div className=" text-xs mt-2 md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              ratione velit est qui repudiandae voluptate necessitatibus
              incidunt ipsum{" "}
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};
