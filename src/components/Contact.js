"use client";

import { RiLinkedinFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const contactList = [
    { src: 'https://www.linkedin.com/in/raja-s-0276571b4/', icon: RiLinkedinFill, label: "HTML", alt: 'Linkedin image', },
    { src: 'https://x.com/_Raja_S/', icon: BsTwitterX, label: "X", alt: 'X image', },
];

export default function Contact() {
    return (
        <section className="w-full md:w-8/12 lg:w-6/12  my-7 p-5 border-2 shadow rounded-lg text-brown-700">
            <div className="flex justify-between items-center">


                <div className="">
                    <div className="flex gap-2 items-center px-1 ">
                        <div className="h-1.5 w-1.5 border rounded-full  bg-brown-700 "></div>
                        <h1 className="text-brown-700 font-semibold ">Contact</h1>
                    </div>
                </div>

                <div className=" flex gap-3 items-center">
                    {
                        contactList.map(contact => (

                            <Link key={contact.src} href={contact.src} target="_blank" className="original-button" >
                                <contact.icon className="icon" />
                            </Link>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}