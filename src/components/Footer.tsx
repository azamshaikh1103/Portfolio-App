import { RiArrowRightSFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <div className=" mt-32 mx-10 h-auto flex flex-col justify-center items-center">
        <div className=" md:w-1/2 text-5xl font-semibold text-center">
          Ready to take <span className=" text-purple-400">your</span> digital
          presence to the next level?
        </div>

        <div className="text-lg w-fit mt-14 md:mt-10 px-10 py-4 cursor-pointer rounded-xl shadow shadow-gray-800 outline outline-1 outline-[#131728] bg-gradient-to-r from-[#282b3d] to-[#060920] flex justify-center hover:bg-gradient-to-br items-center transition delay-1000 duration-1000 ease-in-out">
          Connect Me Now <RiArrowRightSFill />
        </div>
        <div className=" mt-32 w-full text-slate-600 text-sm flex justify-between">
          <div>Copyright &copy; 2024 azamshaikh1103</div>
          <div> O O O O O </div>
        </div>
      </div>
    </>
  );
};
