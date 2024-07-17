export const Navbar = () => {
  return (
    <div className=" z-10 top-7 fixed py-5 inset-x-0 w-auto sm:px-12 rounded-xl shadow shadow-gray-800 md:mx-10  lg:mx-28 h-auto backdrop-blur-xl  bg-gradient-to-r/40 from-[#000319] to-[#161828] outline outline-1 outline-[#131728] flex justify-center sm:justify-between ">
      <div className=" md:text-2xl hidden sm:block">Azam Ali Shaikh</div>
      <ul className=" flex justify-between items-center w-[330px] lg:w-[350px] md:w-[320px] sm:w-[350px]">
        <a href="#about">
          <li className=" hover:border-b-2 hover:border-gray-800">About</li>
        </a>
        <a href="#projects">
          <li className=" hover:border-b-2 hover:border-gray-800">Projects</li>
        </a>
        <a href="#exps">
          <li className=" hover:border-b-2 hover:border-gray-800">
            Experiences
          </li>
        </a>
        <a href="#contact">
          <li className=" hover:border-b-2 hover:border-gray-800">Contact</li>
        </a>
      </ul>
    </div>
  );
};
