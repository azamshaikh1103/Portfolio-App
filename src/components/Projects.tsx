"use client";

import { RiArrowRightSFill } from "react-icons/ri";
import { Fade, Slide } from "react-awesome-reveal";

export const Projects = () => {
  return (
    <>
      <div className=" mt-32 mx-10 h-auto" id="projects">
        <Slide direction="up" duration={200} delay={200}>
          <div className=" text-4xl font-semibold text-center">
            My <span className=" text-purple-400">Projects</span>
          </div>
        </Slide>
        <div className=" mt-16 grid grid-cols-1 md:grid-cols-2">
          <ProjectCard
            ProjectSS="https://i.imgur.com/dBoEF1J.png"
            ProjectTitle="JobHub - Web App for Jobs"
            ProjectDesc="Web app for job seekers and company employer, employer can post the job and candidate can apply for jobs"
            StackLogos="O O O O O"
            LiveSite=""
          />
          <ProjectCard
            ProjectSS="https://i.imgur.com/i9KB3Np.png"
            ProjectTitle="Web App for College Placements"
            ProjectDesc="Web app for final year students to stay up-to-date with the placement companies and to apply on them"
            StackLogos="O O O O"
            LiveSite=""
          />
          <ProjectCard
            ProjectSS="https://i.imgur.com/1CsQnSO.png"
            ProjectTitle="Dairy Ecommerce App"
            ProjectDesc="Ecommerce dairy app for a user to order dairy products online"
            StackLogos="O O O O"
            LiveSite=""
          />
        </div>
      </div>
    </>
  );
};

interface ProjectCardTypes {
  ProjectSS: string;
  ProjectTitle: string;
  ProjectDesc: string;
  StackLogos: string;
  LiveSite: string;
}

const ProjectCard = ({
  ProjectSS,
  ProjectTitle,
  ProjectDesc,
  StackLogos,
  LiveSite,
}: ProjectCardTypes) => {
  return (
    <Fade duration={500} delay={200}>
      <div className=" mx-4 my-4 h-auto bg-gradient-to-r from-[#070a1f] via-[#191c28] outline outline-1 outline-[#282b38] rounded-xl flex flex-col justify-center items-center">
        <div className=" relative h-2/3 mt-10 bg-slate-950 outline outline-1 outline-[#282b38] rounded-xl w-10/12 mx-10">
          <img src="https://i.imgur.com/dBzlaMp.png" />
          <img
            src={ProjectSS}
            className=" absolute bottom-0 place-content-center h-[87%] "
          />
        </div>
        <div className=" h-1/3 w-10/12 mt-4 mb-7 flex flex-col justify-between">
          <div className=" text-xl md:text-3xl mb-3 font-semibold">
            {ProjectTitle}
          </div>
          <div>{ProjectDesc}</div>
          <div className=" mt-3 flex justify-between">
            <div>{StackLogos}</div>
            <div className=" flex justify-center items-center border-b-2 border-[#070a1f] hover:border-b-2 hover:border-[#282b38]">
              <a href={LiveSite}>Check Live Site</a>
              <RiArrowRightSFill />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
