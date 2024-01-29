import ContactCta from "@/components/ContactCta";
import Resume from "@/components/Resume";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function About() {
  return (
    <main className="w-full min-h-screen relative z-20">
      <header className='x-paddings py-6 w-full relative z-50'>
        <div className='w-full shadow-2xl flex-between flex-col-reverse lg:flex-row-reverse gap-12 py-12 px-4 md:px-24'>
        <div className='w-full md:w-1/2 flex justify-center flex-col gap-6 md:gap-12'>
          <h1 className='text-3xl md:text-4xl !leading-[120%] my-6 md:my-0'>
            Hello 👋, I am <span className='gradient-text'>Husam</span> 
          </h1>
          <p className='text-2xl !leading-[145%] text-slate-200'>
            Enthusiastic and self-taught Frontend Developer with a passion for creating dynamic and visually appealing web applications. I studied Civil engineering, and out of curiosity and love of learning I explored the world of programming and found a passion for building websites, and started my journey learning by doing, I’ve acquired skills in building Next.js - React.js projects, and I enjoy working and learning more about how Next.js is making web apps faster and easier to use.
            <br /><br />
            I am actively looking for more exciting opportunities, to grow and dive deeper in the world of Frontend Developement, feel free to contact me any time, You have a project in mind? I am interested to listen..

          </p>
          <Link href='/contact' className='flex flex-col sm:flex-row sm:items-center gap-6 mt-6'>
            <Button size="xl" className="flex items-center gap-2 text-2xl">
              <span>Let's Connect</span>
              <ArrowUpRight size={18} />
            </Button>
          </Link>
        </div>
          <div className='w-full md:w-1/2'>
            <Image 
              src="/husam-2.jpg"
              width={540}
              height={540}
              alt="Husam Asaad"
              className='object-cover rounded-full border-4 border-teal-700 shadow-md'
            />
          </div>
        </div>
      </header>
      <Resume />
      <ContactCta />
      <div className='bg-pattern elipse-2 absolute top-[-450px] right-[-450px] z-0' />
      <div className='bg-pattern elipse-4 absolute top-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-5 absolute bottom-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-6 absolute bottom-[-450px] right-[-450px] z-0' />
    </main>
  )
}