import React from 'react'
import Title from './Title'
import { services } from '@/constants'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className='x-paddings'>
      <Title title="What I can help you with" subtitle="Services" />
      <div className='p-10 grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services