import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";


export default function Contact() {
  return (
    <main className="w-full min-h-screen relative z-20">
      <header className="x-paddings py-6 w-full relative z-50 text-center">
        <div className='w-full flex-center flex-col py-12 px-4 md:px-24 gap-2'>
          <span className="text-2xl text-secondary font-[Mullish]">Contact me</span>
          <h1 className='text-4xl md:text-5xl !leading-[120%]'>Let's Start Working on your Next Project</h1>
          <hr className='w-40 mt-6' />
        </div>
      </header>
      <ContactForm />
      <ContactInfo />
      <div className='bg-pattern elipse-2 absolute top-[-450px] right-[-450px] z-0' />
      <div className='bg-pattern elipse-4 absolute top-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-5 absolute bottom-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-6 absolute bottom-[-450px] right-[-450px] z-0' />
    </main>
  )
}