import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full md:w-8/12 lg:w-6/12 mx-2 mt-7 p-5 border-2 shadow rounded-lg text-brown-700">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center px-1 ">
                    <div className="h-1.5 w-1.5 border rounded-full  bg-brown-700 "></div>
                    <h1 className="text-brown-700 font-semibold ">Software Engineer</h1>
                </div>
                <div className="flex items-center gap-2 px-2 border border-green-400 rounded-xl bg-green-100">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600  opacity-75"></span>
                        <span className="relative inline-flex size-1.5 my-auto mx-auto rounded-full bg-green-600 "></span>
                    </span>
                    <h1 className="text-green-600 font-semibold text-sm  xs:hidden">Open To Work</h1>
                </div>
            </div>

            <div className="flex mt-8 mb-4 flex-wrap-reverse lg:flex-nowrap">
                {/* left */}
                <div className="w-full flex flex-col items-center lg:items-start">
                    <div className="animate-charcter font-bold text-2xl xs:text-xl flex flex-col items-center lg:items-start justify-center my-5">
                        <p className="">Hi, My name is</p>
                        <p className="">Raja S</p>
                        <p>I build things for web</p>
                    </div>

                    {/* buttons */}
                    <div className="">
                        <Link href="https://drive.google.com/file/d/11-h_Z31wgHuJ4B0Z79FqyQxHvIKGUbtb/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="click-btn btn-style4">
                            Resume
                        </Link>
                    </div>

                </div>

                {/* right-user avater */}
                <div className="w-full flex items-center lg:justify-end justify-center ">
                    <div className="border-8 rounded-full box">
                        <Image
                            src={"/avatar.png"}
                            height={160}
                            width={160}
                            priority
                            alt="user avatar"
                            className=" rounded-full xs:size-32"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}