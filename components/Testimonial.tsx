import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className='flex flex-col py-[100px]'>
        <div className='flex flex-col justify-center items-center py-[100px]'>
            <h1 className='text-5xl font-bold '>Famous live on our platform</h1>
            <p className='mt-5'>At the end of the day have fun with celebrities</p>
        </div>
        <div className='flex flex-col gap-6 overflow-x-scroll'>
            <div className='flex flex-row gap-7 '>
                <Image src="Rectangle 8 (1).svg" alt=';' width={360} height={201}/>
                <Image src="Rectangle 9.svg" alt=';' width={360} height={201}/>
                <Image src="Rectangle 10.svg" alt=';' width={360} height={201}/>
                <Image src="Rectangle 11 (1).svg" alt=';' width={360} height={190}/>
                <Image src="/friend.jpg" alt=';' width={300} height={190} className='rounded-3xl'/>

            </div>
            <div className='flex flex-row gap-7 '>
            <Image src="Rectangle 16.svg" alt=';' width={360} height={60}/>
                <Image src="Rectangle 12.svg" alt=';' width={360} height={201}/>
                <Image src="Rectangle 13.svg" alt=';' width={360} height={201}/>
                <Image src="Rectangle 14.svg" alt=';' width={350} height={190}/>
                <Image src="Rectangle 15 (1).svg" alt=';' width={360} height={150}/>


            </div>
        </div>
    </section>
  )
}

export default Testimonial