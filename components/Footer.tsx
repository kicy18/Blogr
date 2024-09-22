import React from 'react'
import Image from 'next/image'
import Button from './Button'


const Footer = () => {
  return (
    <footer className='bg-[#F7F9FA] w-full py-[80px] '>
      <div className='px-[150px] flex flex-row gap-[100px]'>
        <div className='w-[171px]'>
        <Image src="screeno (1).svg" alt='img' height={13.3} width={98.75}/>
        <p className='py-3'>Streaming and Video platform</p>
        <Image src="Group 28.svg" alt='gi' width={55.17} height={20}/>

        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold  mt-[-10px]'>Contact info</h1>
          <div className='flex flex-row gap-2'>
            <Image src="1.svg" alt='f' width={24} height={24}/>
            <p className='w-[180px]'>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
          <div className='flex flex-row gap-2'>
            <Image src="Vector (5).svg" alt='f' width={24} height={24}/>
            <p className='w-[180px]'>(219) 555-0114</p>
          </div>
          <div className='flex flex-row gap-2'>
            <Image src="Vector (6).svg" alt='f' width={24} height={24}/>
            <p className='w-[180px]'>info@screeno.com</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-[-10px]'>
          <h1 className='font-semibold'>Get in touch</h1>
          <input type="text" placeholder='Your name' className='w-[516px] h-[51px] bg-[white] px-4 rounded-lg'/>
          <input type="text" placeholder='Your Email' className='w-[516px] h-[51px] bg-white px-4'/>
          <input type="text" placeholder='Your message' className='w-[516px] h-[120px] bg-white px-4'/>
          <div className='mt-10'>
          <Button label='Send' variant='bg-blue-700' textColor='text-white' />

          </div>
          
        </div>

        
      </div>
      <div className='flex flex-col justify-center items-center'>
      <hr className='h-1 w-full shadow-xl bg-gray-20 mt-[60px]'/>
      <p className='py-4'>©2022 Screeno Ltd, All rights reserved</p>

      </div>
      

    </footer>
  )
}

export default Footer