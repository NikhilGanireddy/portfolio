import Navbar from "@/components/HeroSection/Navbar/Navbar";
import Image from "next/image";
import nikhil from "../../public/nikhil_ganireddy.jpg";
import { PiArrowLineUpRightLight} from "@node_modules/react-icons/pi";

const Herosection = () => {
  return (
    <div className=" dot-section bg-black/10 flex flex-col w-full ">
      <div className="max-w-6xl border-b-neutral-700 border-b mx-auto py-4 w-full">
        <Navbar />
      </div>
      <div className="max-w-6xl h-full mx-auto w-full min-h-[65vh] justify-center items-center flex flex-col gap-6 py-16">
        <Image
          className="rounded-full"
          src={nikhil}
          alt={"nikhil"}
          width={130}
          height={130}
        />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Hi, I'm Nikhil 👋🏻</p>
        <div className="text-center flex flex-col gap-2 text-gradient max-w-xs md:max-w-xl">
          <h1 className="text-[30px] md:text-[56px] font-normal leading-tight">
            Im a UI/UX Designer & Full Stack Web Developer.
          </h1>
        </div>
          <button className="px-12  bg-[#1A1A1A] py-4 rounded-md border border-neutral-700 flex items-center gap-2 transition-all duration-200 hover:scale-90">
              <span>Latest Works</span>
              <PiArrowLineUpRightLight size={18}/>
          </button>
      </div>
    </div>
  );
};

export default Herosection;
