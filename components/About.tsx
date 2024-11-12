import Image from 'next/image'
import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <section className="flexCenter flex-col">
        <div className="bg-gradient-to-r from-violet-600  to-indigo-800 w-full py-12">
            <div className="padding-container max-container text-white
            flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className='flexCenter lg:items-start text-center lg:text-left flex-col lg:w-1/2'>
                    <Image src="/route.svg" alt="camp" width={50} height={50} />
                   
                    <h2 className="bold-40 lg:max-w-[650px] xl:bold-64 ">About the trails tours way</h2>
                    <p className="regular-16 py-4 lg:max-w-[520px]">Bring your friends, family, and loved ones together for unforgettable adventures in nature. Experience the thrill of the great outdoors with every journey.</p>
                    <div className="flexCenter lg:inline-block w-full py-4">
                        <Button
                        type="button" 
                        title="Book Now" 
                        variant="btn-orange" 
                        />
                     
                    </div>

                </div>
               
                <div className="max-container flexCenter w-1/2">
                    <Image 
                    src="/family.jpg"
                    alt="boat"
                    width={1440}
                    height={580}
                    className="object-cover object-center rounded-5xl max-w-md"
                    />
                </div>
            </div>
        </div>
      

      
    </section>
  )
}

export default About