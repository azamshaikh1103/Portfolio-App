"use client";

import { Fade, Slide } from "react-awesome-reveal";

export const Profile = () => {
  return (
    <>
      <div className=" mt-32 mx-10 h-auto">
        <Slide direction="up" duration={200} delay={200}>
          <div className=" text-4xl font-semibold text-center">
            My <span className=" text-purple-400">Profiles</span>
          </div>
        </Slide>
        <div className=" mt-16 grid grid-cols-1 md:grid-cols-2">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

const ProfileCard = () => {
  return (
    <>
      <Fade duration={500} delay={300}>
        <div className=" mx-4 my-4 h-32 bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#131728] flex justify-center items-center">
          <div className=" w-1/4 flex justify-center items-center">logo</div>
          <div className=" w-3/4 mr-5">
            <div>logoTitle</div>
            <div className=" text-xs md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              ratione velit est qui repudiandae voluptate necessitatibus
              incidunt ipsum
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
