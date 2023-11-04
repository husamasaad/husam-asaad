import Title from './Title'

import { ArrowRight, Code } from "lucide-react"
import Image from 'next/image'
import { Button } from './ui/button'
import { Link } from 'nextjs13-progress'
import ProjectCard from './ProjectCard'
import { getProjects } from '@/sanity/action'

const MyWork = async () => {

  const projects = await getProjects()


  return (
    <section className='paddings relative z-20' id='projects'>
      <Title title="My Latest Projects" subtitle="Portfolio" />
      <div className='p-10 grid grid-cols-1 md:grid-cols-2 place-items-center gap-12 my-8'>
        {projects?.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default MyWork