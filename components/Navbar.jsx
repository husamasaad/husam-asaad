
import { Link } from 'nextjs13-progress'
import React from 'react'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <nav className='x-paddings py-8 flex-between relative z-50 w-full'>
      <Link href="/" className='text-2xl gradient-text font-bold'>Husam Asaad</Link>
      <div className='hidden lg:block'>
        <ul className='flex gap-12 items-center'>
          <Link href="/">
            <li className='text-2xl text-slate-200  hover:text-secondary'>Home</li>
          </Link>
          <Link href="/about">
            <li className='text-2xl text-slate-200  hover:text-secondary'>About</li>
          </Link>
          <Link href="/contact">
            <li className='text-2xl text-slate-200  hover:text-secondary'>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="md:hidden">
        <NavMenu />
      </div>
    </nav>
  )
}

export default Navbar