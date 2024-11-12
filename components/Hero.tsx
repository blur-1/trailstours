import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-violet-600  to-indigo-800">
        <div className="max-container padding-container py-20 flex flex-col gap-5 md:gap-10 md:flex-row md:py-32">
            <div className="relative z-20 flex flex-1 flex-col md:w-1/2">
            
            <h1 className="bold-52 lg:bold-88 text-white ">Trails Tours</h1>
            <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
            Join us to explore every destination, creating unforgettable memories on journeys across the globe
            </p>

            <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                {Array(5).fill(1).map((_, index) => (
                    <Image 
                    src="/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                    />
                ))}
                </div>

                <p className="bold-16 lg:bold-20 text-white">
                759k
                <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
                </p>
            </div>

            <div className="flex flex-col w-full gap-3 sm:flex-row">
                <Button 
                type="button" 
                title="Book Now" 
                variant="btn-orange" 
                />
                <Button 
                type="button" 
                title="Get Inspired" 
                icon="/play.svg"
                variant="btn-white-text" 
                />
            </div>
            </div>

            <div className="hero-bg bg-pattern-2 md:w-1/2" />
        </div>
       
  </section>
  )
}

export default Hero