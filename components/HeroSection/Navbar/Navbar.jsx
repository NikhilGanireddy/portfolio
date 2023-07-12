import {FiMail} from "react-icons/fi";
import {FaLinkedin, FaSquareGithub, FaSquareInstagram} from "@node_modules/react-icons/fa6";

const Navbar = () => {

    return (
        <div className="">
            <div className="flex justify-between items-center md:p-0 p-2">
                <div className="justify-center items-center gap-6 inline-flex">
                    <div
                        className={`p-3 lg:p-4 rounded-full border border-neutral-700 inline-flex transition-all duration-200 bg-[#1A1A1A]`}>
                        <FiMail size={18}/>
                    </div>
                    <p className="text-sm duration-100 transition-all hover:text-gray-300 cursor-pointer">
                        Get in touch
                    </p>
                </div>
                {/*<div>*/}
                {/*    <button onClick={() => setDarkMode(!darkMode)}*/}
                {/*            className={`${darkMode ? "bg-[#1A1A1A]" : "bg-white"} hidden lg:inline px-6 py-2 rounded-md border border-neutral-700`}>*/}
                {/*        {darkMode ? "Light mode" : "Dark Mode"}*/}
                {/*    </button>*/}
                {/*    <button onClick={() => setDarkMode(!darkMode)}*/}
                {/*            className={`${darkMode ? "bg-[#1A1A1A]" : "bg-white"} inline lg:hidden p-2 rounded-full border border-neutral-700`}>*/}
                {/*        {darkMode ? <BiSolidSun size={18}/> : <BsFillMoonStarsFill size={18}/>}*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className="text-sm flex items-center">
          <span className="px-1">
            <a className="hidden lg:inline" target="_blank"
               href={"https://www.linkedin.com/in/nikhil-ganireddy-5522a9235"}>
              Linkedin
            </a>
            <a className="inline lg:hidden" target="_blank"
               href={"https://www.linkedin.com/in/nikhil-ganireddy-5522a9235"}>
              <FaLinkedin size={20}/>
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
              <FaSquareGithub size={20}/>
            </a>
            <span className="hidden lg:inline">
              &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
                    <span className="px-1">
            <a className="hidden lg:inline" target="_blank" href={"https://github.com/NikhilGanireddy"}>
              Instagram
            </a>
            <a className="inline lg:hidden" target="_blank" href={"https://github.com/NikhilGanireddy"}>
              <FaSquareInstagram size={20}/>
            </a>
          </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
