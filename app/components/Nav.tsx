"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import useSideBar from "@/hooks/useSideBar";
import { navLinks } from "../data";

const Nav = () => {
  const {onOpen} = useSideBar();
 
  return (
    <nav className='w-full
    flex flex-row justify-between items-center
    px-8 py-4 max-md:justify-end'>
        <h3 className='text-2xl font-semibold
        max-md:hidden'>micah.dev</h3>
        <div className='flex flex-row justify-center items-center gap-x-6
        max-md:hidden'>
            <div className="flex flex-row justify-center items-center gap-x-6
            border-2 border-gray-300 rounded-md px-3 py-2">
            {navLinks.map((link, index) => (
                <a key={index} href={link.link} className="">
                    {link.label}
                </a>
            ))}
            </div>
            <a className='px-3 py-2
            border-2 border-gray-300 rounded-md
            hover:border-red-300
            slide-hover' href="">
                <span className='relative z-10'>Resume</span>
            </a>
        </div>
        <div className="p-3 rounded-lg shadow-md hidden
        max-md:inline">
            <RxHamburgerMenu size={25} onClick={onOpen} />
        </div>
    </nav>
  )
}

export default Nav