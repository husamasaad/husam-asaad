import ContactCta from '@/components/ContactCta'
import Hero from '@/components/Hero'
import MyWork from '@/components/MyWork'
import Services from '@/components/Services'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { Link } from 'nextjs13-progress'

export default function Home() {
  return (
    <main className='w-full min-h-screen relative z-20'>
      <Hero />
      <section className='y-paddings px-12'>
        <p className='mb-12 md:my-24 md:text-center text-2xl md:text-5xl max-w-[1000px] mx-auto !leading-[140%]'>
          Allow me to take your business to the next level. With <span className="text-secondary font-bold">creativity</span>, <span className="text-secondary font-bold">professionalism</span>, and a <span className="text-secondary font-bold">modern touch</span> I can give your online presence a remarkable makeover.
        </p>
        <Link href="https://wa.link/gphdfk" className='w-full flex-center'>
          <Button size="xl" className="flex items-center gap-2 text-2xl">
            <span>Let's have a Chat</span>
            <MessageCircle size={18} />
          </Button>
        </Link>
      </section>
      <MyWork />
      <Services />
      <ContactCta />
      <div className='bg-pattern elipse-2 absolute top-[-450px] right-[-450px] z-0' />
      <div className='bg-pattern elipse-4 absolute top-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-5 absolute bottom-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-6 absolute bottom-[-450px] right-[-450px] z-0' />
    </main>
  )
}
