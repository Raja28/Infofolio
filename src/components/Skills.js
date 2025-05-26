"use client";

import Image from "next/image";

const imageList = [
    { src: '/HTML.png', label: "HTML", alt: 'HTML image', width: 1200, height: 600 },
    { src: '/CSS.png', label: "CSS", alt: 'CSS image', width: 1200, height: 600 },
    { src: '/JS.png', label: "JavaScript", alt: 'JavaScript image', width: 1200, height: 600 },
    { src: '/ReactJS.png', label: "React JS", alt: 'React image', width: 1200, height: 600 },
    { src: '/ReduxToolkit.png', label: "ReduxToolkit", alt: 'Redux Toolkit image', width: 1200, height: 600 },
    { src: '/NodeJS.png', label: "Node JS", alt: 'Node image', width: 1200, height: 600 },
    { src: '/expressjs_logo_3.png', label: "Express JS", alt: 'Express image', width: 1200, height: 600 },
    { src: '/next-js-logo-3.png', label: "Next JS", alt: 'Next JS image', width: 1200, height: 600 },
    { src: '/MongoDB.png', label: "MongoDB", alt: 'MongoDB image', width: 1200, height: 600 },
    { src: '/Tailwind.png', label: "Tailwind", alt: 'Tailwind CSS image', width: 1200, height: 600 },
    { src: '/Bootstrap.png', label: "Bootstrap", alt: 'Bootstrap image', width: 1200, height: 600 },

];


export default function Skills() {
    return (
        <>
            <section className="w-full md:w-8/12 lg:w-6/12  mt-7 p-5 border-2 shadow rounded-lg text-brown-700">
                <div className="">
                    <div className="flex gap-2 items-center px-1 ">
                        <div className="h-1.5 w-1.5 border rounded-full  bg-brown-700 "></div>
                        <h1 className="text-brown-700 font-semibold ">Tech Stacks</h1>
                    </div>
                </div>

                <div>
                    <div className="  grid grid-cols-3 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2 gap-4 my-3 " >
                        {
                            imageList?.map(imageData => (
                                <div key={imageData.alt} className="holographic-container">
                                    <div className="holographic-card border">
                                        <Image
                                            src={imageData.src}
                                            height={40}
                                            width={40}
                                            alt={imageData.alt}
                                            priority
                                            className="object-cover"
                                        />
                                        <p className="text-sm font-semibold">{imageData.label}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}