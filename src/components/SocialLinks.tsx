export const SocailLinks = () => {
  return (
    <>
      <div className=" mt-32 mx-10 h-auto" id="contact">
        <div className=" text-4xl font-semibold text-center">
          Connect With <span className=" text-purple-400">Me</span>
        </div>
        <div className=" mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
        </div>
      </div>
    </>
  );
};

const LinkCard = () => {
  return (
    <>
      <div className=" mx-4 my-4 h-24 w-fit px-3 bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#131728] flex justify-center items-center cursor-pointer ">
        <div className=" w-fit px-5 flex justify-center items-center">logo</div>
        <div className=" px-5 text-xl font-semibold">Facebook</div>
      </div>
    </>
  );
};
