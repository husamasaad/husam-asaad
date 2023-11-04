"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Menu, X } from 'lucide-react'
import { Link } from 'nextjs13-progress'
import { navLinks } from '@/constants'


const NavMenu = () => {

  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <>
      <Popover open={activeMenu} onOpenChange={setActiveMenu}>
        <PopoverTrigger asChild>
          <div>
            {activeMenu ? <X className="3xl cursor-pointer" /> : <Menu className="3xl cursor-pointer" />}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[30vw] max-w-[350px] p-0 z-50 bg-main-bg/80 border-none mr-2 shadow-2xl">
            <ul className="shadow-xl">
                <Link href="/">
                  <li className="p-6 text-xl">
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li className="p-6 text-xl">
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="p-6 text-xl">
                    Contact
                  </li>
                </Link>
            </ul>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default NavMenu