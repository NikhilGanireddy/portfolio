"use client"
import Herosection from "@/components/HeroSection/Herosection";
import SkillsSection from "@components/SkillsSection/SkillsSection";
import WorkSection from "@components/WorkSection/WorkSection";
import CertificationsSection from "@components/CertificationsSection/CertificationsSection";
import LetsTalkSection from "@components/LetsTalkSection/LetsTalkSection";
import FooterSection from "@components/FooterSection/FooterSection";

export default function Home() {
    return (
        <div>
            <Herosection/>
            <SkillsSection/>
            <WorkSection/>
            {/* <CertificationsSection/> */}
            <LetsTalkSection/>
            <FooterSection/>
        </div>
    )
}
