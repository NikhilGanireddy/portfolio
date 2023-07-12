import projectsList from "@components/WorkSection/projects";
import Image from "next/image";
import Link from "@node_modules/next/dist/client/link";
import {PiArrowRightThin} from "@node_modules/react-icons/pi";
// import data-tilt from

const WorkSection = () => {
    return <div className="max-w-6xl mx-auto py-20 px-4 lg:px-10 w-full space-y-12">
        <h1 className="text-center text-4xl font-light text-gradient">Projects</h1>
        <div className="flex flex-col gap-y-12">
            {projectsList.map(project => {
                return <div
                    className=" flex flex-col gap-6 p-4 group rounded-2xl lg:flex-row justify-between items-center border border-transparent hover:border-neutral-700 hover:scale-[1.03] duration-200 transition-all"
                    key={project.id}
                >
                    <div className="h-full space-y-4">
                        <h1 className="text-4xl text-gradient">{project.title}</h1>
                        <p className="text-sm font-light max-w-3xl ">{project.description}</p>
                        <div className="mt-6 gap-2 items-center justify-center inline-flex">
                            <Link href={project.url} target={"_blank"}
                                  className=" duration-200 transition-all text-sm underline flex gap-2 items-center">
                                live site
                                <PiArrowRightThin size={20}/>
                            </Link>
                        </div>
                    </div>
                    <div className=" ">
                        <Link href={project.url} target={"_blank"}>
                            <Image
                                className=" duration-200 transition-all  object-cover object-center max-w-[280px] lg:max-w-[400px] grayscale group-hover:grayscale-0 border-none rounded-xl"
                                src={project.picture} alt={project.title}
                                width={500} height={200}/>
                        </Link>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default WorkSection