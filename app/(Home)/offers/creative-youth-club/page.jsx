import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'nextjs13-progress'
import React from 'react'
import CYCOffer from './_components/CYCOffer'

const Offer = () => {
  return (
    <main className="w-full min-h-screen relative z-20 arab" dir='rtl'>
      <div className="x-paddings py-6 w-full relative z-50 text-center">
        <CYCOffer />
      </div>
      
      <div className='bg-pattern elipse-2 absolute top-[-450px] right-[-450px] z-0' />
      <div className='bg-pattern elipse-4 absolute top-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-5 absolute bottom-[-450px] left-[-450px] z-0' />
      <div className='bg-pattern elipse-6 absolute bottom-[-450px] right-[-450px] z-0' />
    </main>
  )
}

export default Offer