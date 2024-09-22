import Button from "./Button"
import Navbar from "./Navbar"
import Image from "next/image"

const Hero = () => {
  return (
    <section className='w-full bg-[#141516] h-[800px] px-[150px]' >
        <Navbar/>
        <div className="w-full flex flex-row py-[100px] gap-4 justify-between">
          <div className=" w-[500px] py-[50px]">
            <h1 className="text-white text-5xl font-bold leading-20 word-lg">Reach more <br /> people in real time</h1>
            <p className="text-white regular-14 mt-5 word-spacing-lg leading-6">The Screeno ecosystem is designed to help you generate <br /> profit. Set up complete sales and marketing funnels with <br />ease using the Screeno</p>
             
             <div className="flex flex-row gap-6 mt-9">
             <Button label="Start Free Trail" variant="bg-blue-600" textColor="text-white"/>
             <Button label="Login" borderColor="border-[1px] border-white" textColor="text-white"/>
              </div>
          </div>

          <div className="relative ml-[160px]">
            
          <Image src="/bg-2.svg" width={153} height={292} alt="bg" className="absolute top-[90px] left-[-20px] object-cover"/>
            <Image src="/bg-1.svg" width={543} height={362} alt="bg" />
            <div className="bg-white w-[72px] h-[30px] rounded-full flex flex-row justify-center items-center gap-1 absolute top-[-15px] object-cover right-[-17px]">
              <div className="w-[6px] h-[6px] rounded-full bg-red-700"></div>
              <h1 className="font-semibold">Live</h1>
            </div>
            

          </div>
        </div>
        <div className="flex flex-row gap-[140px]">
          <Image src="/Group 1.svg" alt="social" width={194} height={30}/>
          <Image src="/Group.svg" alt="social" width={171} height={30}/>
          <Image src="/social-1.svg" alt="social" width={131} height={30}/>
          <Image src="/Vector.svg" alt="social" width={83} height={31}/>
          <Image src="/g3009.svg" alt="social" width={95} height={30}/>

        </div>
        

    </section>
  )
}

export default Hero