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
          <ProfileCard
            link="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            redirect="https://github.com/azamshaikh1103"
            name="GitHub"
            desc="Contributed on over more than 2 repositories"
          />
          <ProfileCard
            link="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            redirect="https://leetcode.com/u/azamshaikh1103/"
            name="LeetCode"
            desc="Solved over more than 1 DSA questions"
          />
          <ProfileCard
            link="https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg"
            redirect="https://www.codechef.com/users/valve_unity_14"
            name="CodeChef"
            desc="Solved over more than 0 DSA questions"
          />
        </div>
      </div>
    </>
  );
};

interface ProfType {
  link: string;
  redirect: string;
  name: string;
  desc: string;
}

const ProfileCard = ({ link, redirect, name, desc }: ProfType) => {
  return (
    <>
      <Fade duration={300} delay={100}>
        <a
          href={redirect}
          target="_blank"
          className=" md:mx-4 my-4 h-32 bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#131728] flex justify-center items-center hover:scale-[102%] transition-transform"
        >
          <div className=" ml-2 w-1/4 flex justify-center items-center">
            <img
              src={link}
              alt={`${name} Logo`}
              width=" 60"
              height="60"
              className=" rounded-xl bg-white"
            />
          </div>
          <div className="pl-4 w-3/4 mr-5">
            <div className=" text-xl font-semibold">{name}</div>
            <div className=" text-xs md:text-base">{desc}</div>
          </div>
        </a>
      </Fade>
    </>
  );
};
