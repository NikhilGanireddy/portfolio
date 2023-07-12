import Marquee from "@node_modules/react-fast-marquee";
import {AllIcons} from "@icons/allIcons";

const SkillsSection = () => {
    return <div className="bg-[#1A1A1A] w-full flex justify-center items-center py-10">
        <Marquee speed={100}>
            {AllIcons.map(icon => {
                return <div className="mx-6 lg:mx-12 flex justify-center items-center gap-4" key={icon.id}>
                    {icon.icon}
                    <h1 className="text-xl">{icon.name}</h1>
                </div>
            })}
        </Marquee>
    </div>
}

export default SkillsSection