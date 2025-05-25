
"use client";
const imageList = [
    { src: '/HTML.png', label: "HTML", alt: 'HTML image', width: 1200, height: 600 },
];

export default function Education() {
    return (
        <section className="w-full md:w-8/12 lg:w-6/12  mt-7 p-5 border-2 shadow rounded-lg text-brown-700">
            <div className="">
                <div className="flex gap-2 items-center px-1 ">
                    <div className="h-1.5 w-1.5 border rounded-full  bg-brown-700 "></div>
                    <h1 className="text-brown-700 font-semibold ">Education/Certification</h1>
                </div>
            </div>
            <div className="flex justify-center py-5">
                <div className=" flex flex-col items-center">
                    <div className="mx-auto  rounded-full  p-3" style={{maxWidth: "3.5rem"}}>
                        <img src={"/graduation_logo.png"} width={100} height={100} alt="graduation icon"/>
                    </div>
                    <h2 className="font-semibold lg:text-xl xs:text-sm">Master of Computer Applications</h2>
                    <h4 className="text-gray-500 xs:text-xs text-center">C. Abdul Hakeem College of Engineering & Technology</h4>
                    <p className="text-sm xs:text-xs  text-gray-500">2019 - 2021</p>
                </div>
            </div>
            <div className="flex justify-center py-5">
                <div className=" flex flex-col items-center">
                    <div className="mx-auto  rounded-full  p-3 my-auto" style={{maxWidth: "3.5rem"}}>
                        <img src={"/certificate.png"} width={100} height={100} alt="certificate icon"/>
                    </div>
                    <h2 className="font-semibold lg:text-xl xs:text-sm">Web Development Training</h2>
                    <h4 className="text-gray-500 xs:text-xs text-center">NeoG Camp</h4>
                    <p className="text-sm text-gray-500  xs:text-xs">July (2024) -Present</p>
                </div>
            </div>
        </section>
    )
}