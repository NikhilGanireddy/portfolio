import { FiMail } from "react-icons/fi";
import {FaLinkedin, FaSquareGithub, FaSquareInstagram} from "@node_modules/react-icons/fa6";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center md:p-0 p-2">
        <div className="justify-center items-center gap-6 inline-flex">
          <div className="p-3 md:p-4 lg:p-5 rounded-full border border-neutral-700 inline-flex bg-[#1A1A1A] ">
            <FiMail size={18} />
          </div>
          <p className="text-sm duration-100 transition-all hover:text-gray-300 cursor-pointer">
            Get in touch
          </p>
        </div>
        <div className="text-sm flex items-center">
          <span className="px-1">
            <a className="hidden lg:inline" target="_blank" href={"hi"}>
              Linkedin
            </a>
            <a className="inline lg:hidden" target="_blank" href={"hi"}>
              <FaLinkedin size={20} />
            </a>
            <span className="hidden lg:inline">
              &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
          <span className="px-1">
            <a className="hidden lg:inline" target="_blank" href={"hi"}>
              Github
            </a>
            <a className="inline lg:hidden" target="_blank" href={"hi"}>
              <FaSquareGithub size={20} />
            </a>
            <span className="hidden lg:inline">
              &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
          <span className="px-1">
            <a className="hidden lg:inline" target="_blank" href={"hi"}>
              Instagram
            </a>
            <a className="inline lg:hidden" target="_blank" href={"hi"}>
              <FaSquareInstagram size={20} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
