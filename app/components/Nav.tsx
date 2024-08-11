"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import useSideBar from "@/hooks/useSideBar";
import { navLinks } from "../data";

import { useState } from "react";

const Nav = () => {
  const {onOpen} = useSideBar();
  const [activeSection, setActiveSection] = useState("About");
 
  return (
    <nav className='w-full
    flex flex-row justify-between items-center
    px-8 py-4 max-md:justify-end'>
        <h3 className='text-2xl font-semibold
        max-md:hidden'>micah.dev</h3>
        <div className='flex flex-row justify-center items-center gap-x-6
        max-md:hidden'>
            <a className='px-3 py-2
            border-2 border-gray-300/30 rounded-md
            hover:border-primary
            slide-hover' href="
            https://docs.google.com/document/d/1djJMaQ1ozb6BE_kZVZgtdDENPLIisFRN/edit?usp=sharing&ouid=101036441845072148332&rtpof=true&sd=true">
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