import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import { Mail } from 'lucide-react'

const ContactInfo = () => {
  return (
    <section className='paddings relative z-20'>
      <div className='w-full shadow-2xl flex-between flex-col-reverse md:flex-row-reverse gap-12 py-12 px-4 md:px-24'>
        <div className='w-full md:w-1/2 flex justify-center flex-col gap-6 md:gap-12'>
          <h1 className='text-3xl md:text-4xl !leading-[120%] my-6 md:my-0'>
            You don't like forms? <span className='gradient-text'>feel free to contact me directly</span>
          </h1>
          <div className='mt-6 md:mt-12 md:pl-24'>
            <Link  href="mailto:husamibnasaad@gmail.com" target='_blank' className='flex items-center gap-4 mb-12 group'>
              <span className='text-lg px-5 py-2 border border-primary rounded-md shadow-2xl group-hover:border-secondary'><Mail /></span>
              <p className='text-xl font-[Mullish]  group-hover:text-secondary truncate'>husamibnasaad@gmail.com</p>
            </Link>
            <Link  href="https://wa.link/gphdfk" target='_blank' className='flex items-center gap-4 mb-12 group'>
              <span className='text-lg px-5 py-2 border border-primary rounded-md shadow-2xl group-hover:border-secondary'>
                <Image 
                  src="/whatsapp.svg"
                  alt="whatsapp icon"
                  width={24}
                  height={24}
                />
              </span>
              <p className='text-xl font-[Mullish]  group-hover:text-secondary truncate'>+249995671784</p>
            </Link>
            <Link  href="https://m.me/husam.a.hassan" target='_blank' className='flex items-center gap-4 mb-12 group'>
              <span className='text-lg px-5 py-2 border border-primary rounded-md shadow-2xl group-hover:border-secondary'>
                <Image 
                  src="/facebook.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                />
              </span>
              <p className='text-xl font-[Mullish]  group-hover:text-secondary truncate'>Husam Asaad Hassan</p>
            </Link>
            <Link  href="https://t.me/HusamAsaadHassan" target='_blank' className='flex items-center gap-4 mb-12 group'>
              <span className='text-lg px-5 py-2 border border-primary rounded-md shadow-2xl group-hover:border-secondary'>
                <Image 
                  src="/telegram.svg"
                  alt="Telegrsm icon"
                  width={24}
                  height={24}
                />  
              </span>
              <p className='text-xl font-[Mullish]  group-hover:text-secondary truncate'>@HusamAsaadHassan</p>
            </Link>
          </div>
        </div>
        <div className='md:w-1/2'>
          <Image 
            src="/newMessage.png"
            width={540}
            height={540}
            alt="Husam Asaad"
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default ContactInfo