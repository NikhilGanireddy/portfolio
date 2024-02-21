import {FaDribbble, FaGithub, FaLinkedinIn} from "@node_modules/react-icons/fa";

const FooterSection = () => {

    return <div>
        <div className="max-w-6xl border-t-neutral-700 border-t mx-auto w-full flex justify-between items-center py-6 px-4 lg:px-0">
            <h1 className="font-light text-sm">
                &copy; 2023 All rights reserved.
            </h1>
            <div className="text-sm flex items-center">
          <span className="px-1">
            <a className="hidden lg:inline" target="_blank"
               href={"https://www.linkedin.com/in/rajeswari-kema-6080a3203/"}>
              Linkedin
            </a>
            <a className="inline lg:hidden" target="_blank"
               href={"https://www.linkedin.com/in/rajeswari-kema-6080a3203/"}>
              <FaLinkedinIn size={20}/>
            </a>
            </span>
          
            </div>
        </div>
    </div>
}

export default FooterSection