"use client";

import { Slide } from "react-awesome-reveal";

export const SocailLinks = () => {
  return (
    <>
      <div className=" mt-32 mx-10 h-auto" id="contact">
        <Slide direction="up" duration={200}>
          <div className=" text-4xl font-semibold text-center">
            Connect With <span className=" text-purple-400">Me</span>
          </div>
        </Slide>
        <div className=" mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <LinkCard
            link="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
            redirect="https://www.instagram.com/azamthefirst"
            name="Instagram"
          />
          <LinkCard
            link="https://img.icons8.com/?size=100&id=M725CLW4L7wE&format=png&color=000000"
            redirect="https://discord.com/invite/Xtsgh66R"
            name="Discord"
          />
          <LinkCard
            link="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
            redirect="https://x.com/azamshaikh1103"
            name="Twitter"
          />
          <LinkCard
            link="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            redirect="https://www.linkedin.com/in/azamalishaikh"
            name="LinkedIn"
          />
        </div>
      </div>
    </>
  );
};

interface SocialType {
  link: string;
  redirect: string;
  name: string;
}

const LinkCard = ({ link, redirect, name }: SocialType) => {
  return (
    <>
      <Slide direction="up" duration={200}>
        <a
          href={redirect}
          target="_blank"
          className=" mx-4 my-4 h-24 w-fit px-3 bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#131728] flex justify-center items-center cursor-pointer hover:-translate-y-1 transition-transform "
        >
          <div className=" w-1/3 m-2 px-5 flex justify-center items-center">
            <img src={link} alt={name} className=" rounded-xl m-5" />
          </div>
          <div className=" w-2/3 px-5 text-xl font-semibold">{name}</div>
        </a>
      </Slide>
    </>
  );
};
