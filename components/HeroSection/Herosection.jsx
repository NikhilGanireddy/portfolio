import Navbar from "@/components/HeroSection/Navbar/Navbar";
import Image from "next/image";
import raji from "../../public/raji.jpg";
import { PiArrowLineUpRightLight} from "@node_modules/react-icons/pi";

const Herosection = () => {

    return (
    <div className={` flex flex-col w-full `}>
      <div className="max-w-6xl border-b-neutral-700 border-b mx-auto py-4 w-full">
        <Navbar />
      </div>
      <div className="max-w-6xl h-full mx-auto w-full min-h-[65vh] justify-center items-center flex flex-col gap-6 pt-20">
        <Image
          className="rounded-full grayscale hover:grayscale-0 transition-all duration-150"
          src={raji}
          alt={"raji"}
          width={130}
          height={130}
        />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Hi, I'm Raji 👋🏻</p>
        <div className="text-center flex flex-col gap-2 text-gradient max-w-xs md:max-w-xl">
          <h1 className="text-[30px] md:text-[56px] font-normal leading-tight">
            I&apos;m a Full Stack Web Developer.
          </h1>
        </div>
          <a href="#works" className={`px-12 py-4 rounded-md border border-neutral-700 flex items-center gap-2 transition-all duration-200 hover:scale-90 bg-[#1A1A1A] `}>
              <span>Latest Works</span>
              <PiArrowLineUpRightLight size={18}/>
          </a>
          <p className=" px-4 text-sm  lg:px-12 leading-7 font-light pt-16 pb-8 max-w-sm md:max-w-3xl text-center">
              I&apos;m an ambitious undergrad full-stack developer, creating innovative web solutions. Proficient in
              front-end and back-end development, I craft seamless user experiences. Skilled in HTML, CSS, JavaScript,
              React.js, Node.js, and more. Passionate about clean code and problem-solving.
          </p>
      </div>

    </div>
  );
};

export default Herosection;
