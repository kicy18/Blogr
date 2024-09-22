import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Services = () => {
  return (
    <section className='bg-black w-full h-[2250px] px-[150px]'>
        <div className='  '>

            <div className='flex flex-col  py-11'>
            <h1 className='text-white text-5xl font-bold text-center mt-5'>We help
            you grow</h1>
            <div className='flex flex-col'>
            <div className='flex flex-row justify-between py-[100px]'>
                
                <div className='flex flex-col py-[80px]'>
                    <div className='w-[441px]'>
                        <h1 className='text-white text-3xl font-semibold'>Monetize your way</h1>
                        <p className='text-white text-[15px] mt-6 leading-6'>Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.</p>
                        <div className='flex flex-row gap-2 mt-5'>
                            <h1 className='text-white regular-14'>Get Started</h1>
                            <Image src="Arrow 1.svg" alt='arrow' height={2} width={17}/>
                        </div>
                    </div>

                </div>
                <div className='relative'>
                    <div className=' py-8 bg-white absolute rounded-3xl h-[260px] w-[260px] top-[-30px] left-[-40px] flex flex-col items-center gap-5'>
                        <div className='h-[53px] w-[188px] bg-[#F5F5F5] flex flex-row rounded-2xl justify-between items-center  '>
                            <h1 className='px-3 font-bold'>Donate</h1> 
                            <h1  className='px-3 font-bold'>45$</h1>

                        </div>
                        <div className='h-[53px] w-[188px] bg-blue-100 flex flex-row rounded-2xl justify-between items-center shadow-lg '>
                            <h1 className='px-3 font-bold text-blue-600'>Donate</h1> 
                            <h1  className='px-3 font-bold text-blue-600'>75$</h1>

                        </div>
                        <div className='h-[53px] w-[188px] bg-[#F5F5F5] flex flex-row rounded-2xl justify-between items-center  '>
                            <h1 className='px-3 font-bold'>Donate</h1> 
                            <h1  className='px-3 font-bold'>15$</h1>

                        </div>
                    </div>
                    <Image src="/pic.svg" alt='pic' width={555} height={379}/>
                </div>
                


                </div>
            <div className='flex flex-row-reverse justify-between py-[100px]'>
            
            <div className='flex flex-col py-[80px]'>
                <div className='w-[441px] '>
                    <h1 className='text-white text-3xl font-semibold'>Optimized for growth</h1>
                    <p className='text-white text-[15px] mt-6 leading-6 h-[120px]'>The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with <br />ease using the Screeno built-in marketing tools and integrations. Generate leads and convert your audience into paying subscribers, at no extra cost.</p>
                    <div className='flex flex-row gap-2 mt-5'>
                        <h1 className='text-white regular-14'>Get Started</h1>
                        <Image src="Arrow 1.svg" alt='arrow' height={2} width={17}/>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <div className='h-[53px] w-[64px] bg-white rounded-lg flex justify-center items-center absolute  right-[-10px] top-[-18px]'>
                    <div className='relative'>
                    <Image src="Vector (4).svg" alt='icon' height={26} width={32}/>
                    <div className='w-[12px] h-[12px] rounded-full border-white border-[2px] bg-blue-600 flex justify-center text-center absolute top-[-4px] right-[-4px]'><p className='text-[7px] text-white'>1</p></div>

                    </div>
                    
                </div>
                
                <Image src="/pic-1.svg" alt='pic' width={555} height={379}/>
            </div>
            </div>
            <div className='flex flex-col py-10'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-5xl text-white font-bold'>Start your own business today</h1>
                    <p className='text-sm text-white mt-5'>Consistent quality and experience across all platforms and devices.</p>
                    <div className="flex flex-row gap-6 mt-14">
             <Button label="Get Started" variant="bg-white" textColor="text-black"/>
             <Button label="Login" borderColor="border-[1px] border-white" textColor="text-white"/>
              </div>
              <div className="relative mt-[100px]">
            
          <Image src="/Frame 355 (1).svg" width={222.7} height={425.02} alt="bg" className="absolute top-[150px] left-[-20px] object-cover"/>
            <Image src="/Frame 244 (1).svg" width={790.37} height={526.91} alt="bg" />
            
                </div>
                </div>

            </div>

            </div>
                
               
            </div>
            
            

        </div>

    </section>
  )
}

export default Services