import { Dot, ScrollText, GraduationCap, PencilRuler, Info } from 'lucide-react'
import { skills, socialLinks } from '@/constants'
import { Link } from 'nextjs13-progress'

const Resume = () => {
  return (
    <section className='x-paddings'>
      <div className='flex items-start flex-col md:flex-row gap-12 md:gap-52 w-full px-6 md:px-12 py-12 mt-12'>
        <div className='md:w-1/2 flex items-start flex-col gap-8'>
          <h2 className='text-3xl flex items-center gap-4'><GraduationCap /> Education :</h2>
          <div className='md:pl-12'>
            <div className='border-l flex flex-col items-start gap-2 relative py-6'>
              <div className='flex items-center ml-[-23px]'>
                <Dot size={45} />
                <span className='text-lg text-secondary'>2017 to 2023</span>
              </div>
              <div className='px-6'>
                <h4 className='text-3xl'>Sudan University for Science and Technology</h4>
                <p className='text-xl mt-4'>Graduate from Civil Engineering</p>
              </div>
            </div>
          </div>
          <h2 className='text-3xl flex items-center gap-4 my-8'>
            <ScrollText />  Certificates :
          </h2>
          <div className='md:pl-12'>
            <div className='border-l flex flex-col items-start gap-2 relative py-6'>
              <div className='flex items-center ml-[-23px]'>
                <Dot size={45} />
                <span className='text-lg text-secondary'>December 2023</span>
              </div>
              <div className='px-6'>
                <h4 className='text-3xl'>Back End Development and APIs</h4>
                <p className='text-xl mt-4'>Free Code Camp</p>
              </div>
            </div>
            <div className='border-l flex flex-col items-start gap-2 relative py-6'>
              <div className='flex items-center ml-[-23px]'>
                <Dot size={45} />
                <span className='text-lg text-secondary'>April 2023</span>
              </div>
              <div className='px-6'>
                <h4 className='text-3xl'>Front End Development Libraries</h4>
                <p className='text-xl mt-4'>Free Code Camp</p>
              </div>
            </div>
            <div className='border-l flex flex-col items-start gap-2 relative py-6'>
              <div className='flex items-center ml-[-23px]'>
                <Dot size={45} />
                <span className='text-lg text-secondary'>November 2022</span>
              </div>
              <div className='px-6'>
                <h4 className='text-3xl'>JavaScript Algorithms and Data Structures</h4>
                <p className='text-xl mt-4'>Free Code Camp</p>
              </div>
            </div>
            <div className='border-l flex flex-col items-start gap-2 relative py-6'>
              <div className='flex items-center ml-[-23px]'>
                <Dot size={45} />
                <span className='text-lg text-secondary'>August 2022</span>
              </div>
              <div className='px-6'>
                <h4 className='text-3xl'>Responsive Web Design</h4>
                <p className='text-xl mt-4'>Free Code Camp</p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 flex items-start flex-col'>
          <h2 className='text-3xl flex items-center gap-4 mb-8'>
            <PencilRuler />  Skills :
          </h2>
          <div className='md:pl-12 flex flex-wrap items-center gap-8 mb-10'>
            {skills.map(skill => (
              <span key={skill} className='text-lg px-5 py-2 border border-primary rounded-md shadow-2xl'>{skill}</span>
            ))}
          </div>
          <h2 className='text-3xl flex items-center gap-4 my-12'>
            <Info />  Personal Information :
          </h2>
          <div className='md:pl-12'>
            <div className='flex-between gap-12 mb-12 flex-wrap'>
              <h4 className='text-xl text-secondary whitespace-nowrap'>Email :</h4>
              <p className='text-2xl '>husamibnasaad@gmail.com</p>
            </div>
            <div className='flex-between gap-12 my-12 flex-wrap'>
              <h4 className='text-xl text-secondary whitespace-nowrap'>Phone Number :</h4>
              <p className='text-2xl '>+00249995671784</p>
            </div>
            <div className='flex-between gap-12 my-12 flex-wrap'>
              <h4 className='text-xl text-secondary whitespace-nowrap'>Location :</h4>
              <p className='text-2xl'>Sudan</p>
            </div>
            <div className='flex-between gap-12 my-12 flex-wrap'>
              <h4 className='text-xl text-secondary whitespace-nowrap'>Birthdate :</h4>
              <p className='text-2xl'>05 Aug 1999</p>
            </div>
            <div className='flex flex-wrap items-center gap-8 my-12'>
              <h4 className='text-xl text-secondary whitespace-nowrap'>Social Links :</h4>
              {socialLinks.map(link => (
                <Link target="_blank" key={link.name} href={link.url} className='p-4 border border-primary rounded-full transition hover:bg-primary'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume