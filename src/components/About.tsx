export const About = () => {
  return (
    <div className=" md:mt-40 lg:mt-1 mx-5" id="about">
      <div className=" w-full text-center text-4xl font-semibold">
        About <span className=" text-purple-400">Me</span>
      </div>
      <div className=" mt-10 mx-4 py-10 px-16 text-xl bg-gradient-to-r from-[#070a1f] via-[#191c28] rounded-xl outline outline-1 outline-[#131728]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio repellat, quis eveniet veniam omnis enim, molestiae porro ea eum et qui ipsam. Nisi doloribus eius libero labore perspiciatis, accusantium accusamus consequatur fugiat neque omnis molestias deleniti. Repellat, dicta cumque tempore, ipsam aut sunt, voluptatem aperiam quia magnam ipsa magni fuga.
      </div>

      <div className=" mt-20 h-auto mx-5">
        <div className=" flex flex-col md:flex-row justify-center">
          <div className=" md:w-2/5 bg-[#0b0d22] h-[500px] outline outline-1 outline-[#131728] rounded-xl ">profile</div>
          <div className=" md:w-3/5 mt-5 md:mt-0 h-[500px] md:ml-5 flex flex-col justify-between">
            <div className=" bg-[#0b0d22] h-[240px] outline outline-1 outline-[#131728] rounded-xl ">map</div>
            <div className=" bg-[#0b0d22] h-[240px] outline outline-1 outline-[#131728] rounded-xl ">technologies</div>
          </div>
        </div>

        <div className=" mt-7 flex flex-col md:flex-row justify-center">
          <div className=" md:w-1/3 h-[360px] flex flex-col justify-between">
            <div className=" bg-[#0b0d22] h-[170px] outline outline-1 outline-[#131728] rounded-xl ">random line</div>
            <div className=" bg-[#0b0d22] h-[170px] outline outline-1 outline-[#131728] rounded-xl ">copy email</div>
          </div>
          <div className=" md:w-2/3 md:ml-5 mt-5 md:mt-0 bg-[#0b0d22] h-[360px] outline outline-1 outline-[#131728] rounded-xl ">current project with code snippet</div>
        </div>
      </div>
    </div>
  );
};
