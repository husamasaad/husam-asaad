import ProjectDetails from "@/components/ProjectDetails"
import ContactCta from "@/components/ContactCta"
import { getProjects } from "@/sanity/action"
import { Link } from "nextjs13-progress"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"


export const revalidate = 90

export async function generateStaticParams() {

  const projects = await getProjects()

  return projects.map((project) => ({
    slug: project.slug.current,
  }))
}



const ProjectPage = async ({ params: { slug } }) => {

  const projects = await getProjects()

  if (!projects) {
    return (
      <main className="w-full min-h-screen relative z-20">
        <header className="x-paddings py-6 w-full relative z-50 text-center">
          <div className='w-full flex-center flex-col py-12 px-4 md:px-24 gap-2'>
            <span className="text-2xl text-secondary font-[Mullish]">Error..</span>
            <h1 className='text-4xl md:text-5xl !leading-[120%]'>Something Went Wrong, Please try again later..</h1>
            <hr className='w-40 mt-6' />
          </div>
          <Link href='/' className='flex flex-col sm:flex-row sm:items-center gap-6 mt-16'>
            <Button size="xl" className="flex items-center gap-2 text-2xl mx-auto">
              <ArrowLeft size={18} />
              <span>Go Back to Homepage</span>
            </Button>
          </Link>
        </header>
        <div className='bg-pattern elipse-2 absolute top-[-450px] right-[-450px] z-0' />
        <div className='bg-pattern elipse-4 absolute top-[-450px] left-[-450px] z-0' />
        <div className='bg-pattern elipse-5 absolute bottom-[-450px] left-[-450px] z-0' />
        <div className='bg-pattern elipse-6 absolute bottom-[-450px] right-[-450px] z-0' />
      </main>
    )
  }

  const project = projects.find(project => project.slug.current == slug)



  return (
    <main className="w-full min-h-screen relative z-20">
      <header className="x-paddings py-6 w-full relative z-50 text-center">
        <div className='w-full flex-center flex-col py-12 px-4 md:px-24 gap-2'>
          <span className="text-2xl text-secondary font-[Mullish]">{project.category}</span>
          <h1 className='text-4xl md:text-5xl !leading-[120%]'>{project.title}</h1>
          <hr className='w-40 mt-6' />
        </div>
      </header>
      <ProjectDetails project={project} />
      <ContactCta />
      <div className='bg-pattern elipse-2 absolute top-[-450px] right-[-450px] z-0' />
      <div className='bg-pattern elipse-4 absolute top-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-5 absolute bottom-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-6 absolute bottom-[-450px] right-[-450px] z-0' />
    </main>
  )
}

export default ProjectPage