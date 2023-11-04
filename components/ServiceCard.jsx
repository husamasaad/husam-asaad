import Image from 'next/image'

const ServiceCard = ({ service }) => {
  return (
    <div className='flex items-center md:items-start flex-col md:flex-row gap-4'>
      <Image 
        alt={service.title}
        src={service.icon}
        width={120}
        height={180}
      />
      <div className='flex flex-col gap-6'>
        <h4 className='text-2xl text-primary'>{service.title}</h4>
        <p className='text-xl !leading-[145%]'>{service.description}</p>
      </div>
    </div>
  )
}

export default ServiceCard