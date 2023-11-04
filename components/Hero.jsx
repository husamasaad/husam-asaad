import Image from 'next/image'
import { Link } from 'nextjs13-progress'

import { ArrowUpRight, Download } from "lucide-react"
import { Button } from './ui/button'


const Hero = () => {
  return (
    <header className='x-paddings py-6 w-full relative z-50'>
      <div className='w-full shadow-2xl flex-between flex-col-reverse md:flex-row gap-12 py-12 px-4 md:px-24'>
        <div className='flex justify-center flex-col gap-4 md:gap-12'>
          <p className='text-xl md:text-5xl'>
            Hello👋
          </p>
          <h1 className='text-4xl md:text-7xl !leading-[120%] max-md:mb-16 md:whitespace-nowrap'>
            I'm Husam Asaad, a <br /><span className='gradient-text'>Frontend Developer</span>
          </h1>
          <div className='flex flex-col sm:flex-row sm:items-center gap-6'>
            <Link href="/contact">
              <Button size="xl" className="flex items-center gap-2 text-2xl w-full">
                <span>Contact Me</span>
                <ArrowUpRight size={18} />
              </Button>
            </Link>
            <Link href="/husam-asaad-cv.pdf">
              <Button size="xl" variant="outline" className="flex items-center gap-2 text-2xl w-full">
                <span>Download My CV</span>
                <Download size={18} />
              </Button>
            </Link>
          </div>
        </div>
        <div className='w-1/2'>
          <Image 
            src="/husam.jpg"
            width={540}
            height={540}
            alt="Husam Asaad"
            className='object-cover rounded-full border-4 border-teal-700 shadow-md'
          />
        </div>
      </div>
      
    </header>
  )
}

export default Hero