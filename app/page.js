import Herosection from "@/components/HeroSection/Herosection";
import SkillsSection from "@components/SkillsSection/SkillsSection";
import WorkSection from "@components/WorkSection/WorkSection";
import CertificationsSection from "@components/CertificationsSection/CertificationsSection";

export default function Home() {
    return (
        <div>
            <Herosection/>
            <SkillsSection/>
            <WorkSection/>
            <CertificationsSection/>
        </div>
    )
}
