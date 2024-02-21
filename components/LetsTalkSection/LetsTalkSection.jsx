"use client"
import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {PiArrowLineUpRightLight} from "@node_modules/react-icons/pi";
import {FaFacebookMessenger} from "@node_modules/react-icons/fa";
import {IoLogoWhatsapp} from "@node_modules/react-icons/io";
import {GrMail} from "@node_modules/react-icons/gr";

const LetsTalkSection = () => {
    const form = useRef();
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userMessage, setUserMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yx19xui', 'template_5w21z3s', form.current, 'g5afEX9sgBHcp80li')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }).then(() => {
            setUserMessage("")
            setUserName("")
            setUserEmail("")
        })
    }

    return <div className="w-full">
        <div id="letstalk" className=" scroll-smooth max-w-6xl  py-20 px-4 lg:px-10 w-full space-y-8 mx-auto">
            <h1 className="text-center text-4xl font-light text-gradient">Let&apos;s Talk</h1>
            <div className="flex flex-col lg:flex-row h-full min-w-full justify-between items-center lg:gap-0 gap-4">
                <div className="max-w-full lg:max-w-[30%] w-full p-6 lg:p-12 rounded-2xl grid grid-rows-3 gap-4">
                    <article className=" bg-[#1A1A1A]  border border-neutral-700 max-w-full rounded-2xl p-6 gap-2 flex flex-col hover:scale-95 transition-all duration-200">
                        <div className="flex gap-2 items-center ">
                            <GrMail size={20}/>
                            <h1 className="text-xl font-normal text-gradient">Email</h1>
                        </div>
                        <h2 className="font-light text-sm text-gradient">rajeswarikema@gmail.com</h2>
                        <a href={"mailto:nikhilganireddy@gmail.com"} target={"_blank"}  className="text-sm font-light underline">Send a
                            message</a>
                    </article>
                    <article className=" bg-[#1A1A1A]  border border-neutral-700 max-w-full rounded-2xl p-6 gap-2 flex flex-col hover:scale-95 transition-all duration-200">
                        <div className="flex gap-2 items-center">
                            <FaFacebookMessenger size={20}/>
                            <h1 className="text-xl font-normal text-gradient">Messenger</h1>
                        </div>
                        <h2 className="font-light text-sm text-gradient">Rajeswari Kema</h2>
                        <a href={"https://m.me/rajeswari-kema"} target={"_blank"} className="text-sm font-light underline">Send a
                            message</a>
                    </article>
                    <article className=" bg-[#1A1A1A]  border border-neutral-700 max-w-full rounded-2xl p-6 gap-2 flex flex-col hover:scale-95 transition-all duration-200">
                        <div className="flex gap-2 items-center">
                            <IoLogoWhatsapp size={20}/>
                            <h1 className="text-xl font-normal text-gradient">Whatsapp</h1>
                        </div>
                        <h2 className="font-light text-sm text-gradient">+91 70139-25182</h2>
                        <a href={"https://api.whatsapp.com/send?phone=+917013925182"} target={"_blank"}  className="text-sm font-light underline">Send a
                            message</a>
                    </article>
                </div>
                {<span className="inline lg:hidden text-gradient">OR</span>}
                <form ref={form} onSubmit={sendEmail}
                      className=" w-full p-6 lg:p-12 rounded-2xl lg:min-w-[70%] flex flex-col gap-6">
                    <input
                        minLength={3}
                        className=" bg-transparent border rounded-lg border-neutral-700 px-8 py-4 w-full placeholder:text-[#9E9E9E] text-sm font-light focus:outline focus:outline-neutral-700 "
                        type="text" placeholder="Name"
                        name="name"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <input minLength={6}
                           className=" bg-transparent border rounded-lg border-neutral-700 px-8 py-4 w-full placeholder:text-[#9E9E9E] text-sm font-light focus:outline focus:outline-neutral-700 "
                           type="email" placeholder="Email"
                           name="email"
                           value={userEmail}
                           onChange={e => setUserEmail(e.target.value)}

                    />
                    <textarea
                        minLength={24}
                        className="resize-none bg-transparent border min-h-[150px] rounded-lg border-neutral-700 px-8 py-4 w-full placeholder:text-[#9E9E9E] text-sm font-light focus:outline focus:outline-neutral-700 "
                        placeholder="Message"
                        name="message"
                        value={userMessage}
                        onChange={e => setUserMessage(e.target.value)}

                    />
                    <button type={"submit"}
                            className={` w-max px-8 py-4 rounded-md border border-neutral-700 flex items-center gap-2 transition-all duration-200 hover:scale-90 bg-[#1A1A1A] `}>
                        <span className="text-sm font-light">Send</span>
                        <PiArrowLineUpRightLight size={18}/>
                    </button>
                </form>
            </div>
        </div>
    </div>

}
export default LetsTalkSection