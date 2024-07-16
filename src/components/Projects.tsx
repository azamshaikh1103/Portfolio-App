import { RiArrowRightSFill } from "react-icons/ri";

export const Projects = () => {
  return (
    <>
      <div className=" mt-32 mx-10 h-auto" id="projects">
        <div className=" text-4xl font-semibold text-center">
          My <span className=" text-purple-400">Projects</span>
        </div>
        <div className=" mt-16 grid grid-cols-1 md:grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

const ProjectCard = () => {
  return (
    <>
      <div className=" mx-4 my-4 h-[550px] bg-gradient-to-r from-[#070a1f] via-[#191c28] outline outline-1 outline-[#131728] rounded-xl flex flex-col justify-center items-center">
        <div className=" h-2/3 mt-10 bg-slate-950 outline outline-1 outline-[#131728] rounded-xl w-10/12 mx-10"></div>
        <div className=" h-1/3 w-10/12 mt-4 mb-7 flex flex-col justify-between">
          <div className=" text-3xl font-semibold">
            Price Prediction using ML model
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dolorum?we fwef we weff
          </div>
          <div className=" flex justify-between">
            <div>Logos here </div>
            <div className=" flex justify-center items-center">
              <a href="">Check Live Site</a>
              <RiArrowRightSFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};