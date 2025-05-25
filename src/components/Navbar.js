"use client"

import Image from "next/image"

export default function Navbar() {
    return (
        <header className="flex h-14 items-center justify-center border-b-[1px] border-richblack-700 border-opacity-20">
            <div className="w-11/12">
                <div className="" >
                    <Image src={"/infofolio.png"}
                        className=""
                        width={160} height={42}
                        alt="Info folio logo"
                        priority
                    />
                </div>
            </div>
        </header>
    )
}