import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'

const ContactCta = () => {
  return (
    <section className='paddings relative z-20'>
      <div className='w-full shadow-2xl flex-between flex-col-reverse md:flex-row gap-12 py-12 px-4 md:px-24'>
        <div className='w-full md:w-1/2 flex justify-center flex-col gap-4 md:gap-12'>
          <p className='text-4xl md:text-5xl !leading-[120%] my-8 md:mt-0'>
            Let me know if you want to talk about a potential collaboration. <span className='gradient-text'> I’m available for freelance work. </span> 
          </p>
          <Link href='/contact' className='flex flex-col sm:flex-row sm:items-center gap-6'>
            <Button size="xl" className="flex items-center gap-2 text-2xl">
              <span>Let's Connect</span>
              <ArrowUpRight size={18} />
            </Button>
          </Link>
        </div>
        <div className='md:w-1/2'>
          <Image 
            src="/coding.png"
            width={540}
            height={540}
            alt="Contact me"
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default ContactCta