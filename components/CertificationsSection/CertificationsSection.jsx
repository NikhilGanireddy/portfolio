import Image from "next/image";
import certificates from "./certificates"
import Link from "@node_modules/next/dist/client/link";
import {PiArrowRightThin} from "@node_modules/react-icons/pi";

const CertificationsSection = () => {
    return <div className="w-full bg-[#1A1A1A]">
        <div className="max-w-6xl  py-20 px-4 lg:px-10 w-full space-y-12 mx-auto">
            <h1 className="text-4xl font-light text-center text-gradient">Certifications</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map(certificate => {
                    return <div key={certificate.id}
                                className=" group flex flex-col gap-6 p-6 rounded-2xl border border-neutral-700 hover:shadow-neutral-700 shadow-md transition-all duration-200">
                        <h1 className="text-3xl font-light text-gradient">{certificate.title}</h1>
                        <Image className="grayscale-0 group-hover:grayscale duration-200 transition-all max-w-full h-auto w-full aspect-square object-center object-cover rounded-2xl"
                               src={certificate.picture} alt={certificate.title} width={500} height={200}/>
                        <h2 className="font-light text-sm">From: <span
                            className="font-semibold text-[16px] text-gradient">{certificate.from}</span></h2>
                        <Link href={certificate.url} target={"_blank"}
                              className=" duration-200 transition-all text-sm underline flex gap-2 items-center">
                            View Certificate
                            <PiArrowRightThin size={20}/>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default CertificationsSection