"use client"

import useSideBar from "@/hooks/useSideBar"
import { navLinks } from "../data";
import { IoClose } from "react-icons/io5";

const SideBar = () => {
    const { isOpen, onClose } = useSideBar();

    if (!isOpen) {
      return;
    }

  return (
    <div className='h-[100vh] fixed top-0 right-0
    flex flex-col justify-start items-end gap-y-2
    pr-4 pl-10 py-8
    shadow-md backdrop-blur-sm'>
      <button onClick={onClose} className="mb-6">
        <IoClose size={25} />
      </button>
      <h3 className='text-lg font-semibold mb-2'>micah.dev</h3>
      {navLinks.map((link, index) => (
                <a key={index} href={link.link}>
                    {link.label}
                </a>
            ))}
    </div>
  )
}

export default SideBar