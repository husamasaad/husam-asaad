import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'nextjs13-progress'

const ProjectCard = ({ project }) => {
  return (
    <div className=' p-4 md:px-16 md:py-12 shadow-2xl rounded-xl relative overflow-hidden max-w-2xl'>
      <Image 
        alt={project?.title}
        width={567}
        height={548}
        src={project?.thumbnail}
        className='rounded-xl object-contain h-auto'
      />
      <h3 className='text-2xl md:text-3xl my-8 font-semibold !leading-[145%]'>{project?.title}</h3>
      <Link href={`/projects/${project.slug.current}`} className='w-full'>
        <Button size="lg" className="flex items-center gap-2 ml-auto">
          <span>Read more</span>
          <ArrowRight size={12} />
        </Button>
      </Link>
    </div>
  )
}

export default ProjectCard