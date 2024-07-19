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
          <ExpCard title="Internship in Web dev and Cloud computing" desc="Completed 1 month inhouse internship of Web dev in MERN Stack in our institute Shah and Anchor Kutchhi Engineering College and created a project JobHub" />
          <ExpCard title="Internship in Web dev and Cloud computing" desc="Completed 1 month inhouse internship of Web dev using HTML, CSS & Js in our institute Shah and Anchor Kutchhi Engineering College and created a project MilkMan" />
        </div>
      </div>
    </>
  );
};

const ExpCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <Slide>
        <div className=" my-4 h-32 bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#282b38] flex justify-center items-center">
          <div className=" w-1/5 flex justify-center items-center">
            <img
              src="https://e7.pngegg.com/pngimages/651/48/png-clipart-web-development-responsive-web-design-web-developer-software-developer-outgoing-web-design-logo.png"
              alt=""
              className=" bg-white rounded-xl h-16 w-20"
            />
          </div>
          <div className=" ml-4 md:ml-0 w-4/5 md:mr-5">
            <div className=" md:text-xl font-semibold">{title} </div>
            <div className=" text-xs my-2 md:text-base">{desc}</div>
          </div>
        </div>
      </Slide>
    </>
  );
};
