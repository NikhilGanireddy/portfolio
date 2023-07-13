import {FiMail} from "react-icons/fi";
import {FaDribbble, FaGithub, FaLinkedinIn} from "@node_modules/react-icons/fa";

const Navbar = () => {

    return (
        <div className=" scroll-smooth">
            <div className="flex justify-between items-center md:p-0 p-2">
                <a href={"#letstalk"} className="justify-center items-center gap-6 inline-flex">
                    <div
                        className={`p-3 lg:p-4 rounded-full border border-neutral-700 inline-flex transition-all duration-200 bg-[#1A1A1A]`}>
                        <FiMail size={18}/>
                    </div>
                    <span  className="text-sm duration-100 transition-all hover:text-gray-300 cursor-pointer">
                        Get in touch
                    </span>
                </a>

                <div className="text-sm flex items-center">
          <span className="px-1">
            <a className="hidden lg:inline" target="_blank"
               href={"https://www.linkedin.com/in/nikhil-ganireddy-5522a9235"}>
              Linkedin
            </a>
            <a className="inline lg:hidden" target="_blank"
               href={"https://www.linkedin.com/in/nikhil-ganireddy-5522a9235"}>
              <FaLinkedinIn size={20}/>
            </a>
            <span className="hidden lg:inline">
              &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
                    <span className="px-1">
            <a className="hidden lg:inline" target="_blank" href={"https://github.com/NikhilGanireddy"}>
              Github
            </a>
            <a className="inline lg:hidden" target="_blank" href={"https://github.com/NikhilGanireddy"}>
              <FaGithub size={20}/>
            </a>
            <span className="hidden lg:inline">
              &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
                    <span className="px-1">
            <a className="hidden lg:inline" target="_blank" href={"https://dribbble.com"}>
              Dribble
            </a>
            <a className="inline lg:hidden" target="_blank" href={"https://dribbble.com"}>
              <FaDribbble size={20}/>
            </a>
          </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
