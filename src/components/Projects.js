"use client";

import Link from "next/link";

const projectList = [
    {
        src: '/mobile_icon.png',
        name: "Modern Mobiles",
        label: "E-com Project",
        alt: 'Modern Mobiles image',
        link: "https://modern-mobiles.vercel.app/"
    },
    {
        src: '/crm_icon.png',
        name: "MyCRM",
        label: "Customer Relationship Management",
        alt: 'My CRM image',
        link: "https://my-crm-client.vercel.app/"
    },
    {
        src: '/workasana_logo.png',
        name: "Workasana",
        label: "Task Management App",
        alt: 'workasana image',
        link: "https://workasana.vercel.app/"
    },
];

export default function Projects() {
    return (
        <section className="w-full md:w-8/12 lg:w-6/12  mt-7 p-5 border-2 shadow rounded-lg text-brown-700">
            <div className="">
                <div className="flex gap-2 items-center px-1 ">
                    <div className="h-1.5 w-1.5 border rounded-full  bg-brown-700 "></div>
                    <h1 className="text-brown-700 font-semibold ">Projects</h1>
                </div>
            </div>

            <div>
                <ul className="list bg-base-100 rounded-box ">

                    {
                        projectList.map((project, index) => (
                            <li key={project.link} className="list-row flex justify-between my-5">
                                <div className="flex gap-2">

                                    <div className="text-4xl font-thin opacity-30 tabular-nums xs:text-xl" >0{index + 1}</div>
                                    <div><img className="size-8 lg:size-10 md:size-5 sm:size-6 xs:size-8 rounded-box" src={project.src} alt={project.alt} /></div>
                                    <div className="list-col-grow ">
                                        <div className="font-semibold xs:text-sm">{project.name}</div>
                                        <div className="text-xs uppercase font-semibold opacity-60 xs:hidden">
                                            {project.label}
                                        </div>
                                    </div>
                                </div>
                                <Link href={project.link} className="btn btn-square btn-ghost " target="_blank" rel="noopener noreferrer">

                                    <img src="/link_2.png" width={20} height={20} />

                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}