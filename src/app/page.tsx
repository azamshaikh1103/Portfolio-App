import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";
import { SocailLinks } from "@/components/SocialLinks";
import { WorkExp } from "@/components/WorkExp";

export default function Home() {
  return (
    // <>
    <div className=" text-white bg-[#000319] h-auto px-0 sm:px-5 lg:px-20">
      <Navbar />
      <Hero />
      <About />
      <Profile />
      <Projects />
      <WorkExp />
      <SocailLinks /> 
      <Footer />
    </div>
    // </>
  );
}
