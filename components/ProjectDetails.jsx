
import Image from 'next/image'
import { Link } from 'nextjs13-progress'

const ProjectDetails = ({ project }) => {
  return (
    <section className='x-paddings relative z-20'>
      <Image 
        src={project.image}
        alt='organick'
        height={781}
        width={1400}
        priority
      />
      <div className='flex items-start justify-between flex-col md:flex-row gap-12 w-full px-6 md:px-12 py-12 mt-12'>
        <div className='md:w-1/2'>
          <h3 className='mb-4 text-2xl text-secondary'>Project Summary :</h3>
          <p className='text-xl !leading-[145%] text-slate-200'>
            {project.summary}
          </p>
          <div className='flex items-center flex-wrap mt-12 gap-4'>
            <h4 className='text-2xl text-secondary'>Tools & Technologies:</h4>
            {project.tools.map(item => (
              <span key={item} className='text-lg px-5 py-2 border border-primary rounded-md shadow-2xl'>{item}</span>
            ))}
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <h3 className='text-2xl text-secondary'>Project Details :</h3>
          <div className='p-6 md:p-12 shadow-2xl w-full flex flex-col gap-6'>
            <div>
              <h4 className='text-xl text-primary font-semibold mb-2'>Category:</h4>
              <p className='text-xl font-[Mullish]'>{project.category}</p>
            </div>
            <div>
              <h4 className='text-xl text-primary font-semibold mb-2'>Built At:</h4>
              <p className='text-xl font-[Mullish]'>{project.date}</p>
            </div>
            <div>
              <h4 className='text-xl text-primary font-semibold mb-2'>Live Website:</h4>
              <Link className='text-xl font-[Mullish] underline-offset-2 underline hover:text-secondary' href={project.live} target='_blank'>{project.live}</Link>
            </div>
            <div>
              <h4 className='text-xl text-primary font-semibold mb-2'>Github Repositry:</h4>
              <Link className='text-xl font-[Mullish] underline-offset-2 underline hover:text-secondary' href={project.repo} target='_blank'>{project.repo}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails