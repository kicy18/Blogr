import Image from "next/image"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className=' w-full py-8 flex flex-row '>
      <div className="mt-3.5">
        <Image src="/screeno.svg" width={100} height={18} alt="hi"/>
      </div>
      <div className="text-white flex flex-row gap-[100px] px-[150px] regular-14 mt-3">
        <a href="/">Exemplets</a>
        <a href="/">Pricing</a>
        <a href="/">About</a>
      </div>
      <div className="flex ml-[130px] ">
        <Button label="Login" textColor="text-white" />
        <Button label="Start Free Trail" textColor="text-white" variant="bg-blue-600" />
      </div>
        

    </nav>
 
  )
}

export default Navbar