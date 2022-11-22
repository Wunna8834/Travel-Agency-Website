import React from 'react'
import CTA from '../section/CTA'
import Destination from '../section/Destination'
import Hero from '../section/Hero'

function Home() {
  return (
    <div className='mx-3'>
        <Hero />
        <Destination />
        <CTA />
    </div>
  )
}

export default Home