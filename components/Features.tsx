import Button from "./Button"
import Image from "next/image"
import FeaturCard from "./FeaturCard"

const Features = () => {
  return (
    <section className="px-[300px] py-[100px]">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">All-in-one platform</h1>
            <p className="regular-16 text-center mt-3">You take care of the video quality and we take care of <br />everything else</p>
            <div className="flex flex-row gap-6 mt-9">
             <Button label="Start Free Trail" variant="bg-blue-600" textColor="text-white"/>
             <Button label="Login" borderColor="border-[1px] border-black" textColor="text-black"/>
              </div>
        </div>
        <div className="grid grid-cols-3 gap-[90px] py-[100px] ml-12">
           <FeaturCard title="Upload & Organize" subtext="Upload in bulk, organize content in categories, add custom filters & upload extras." imgURL="Group (2).svg"/>
           <FeaturCard title="Stream On-Demand" subtext="Showcase your content in a beautiful on-demand video catalog.
" imgURL="Vector (1).svg"/>
           <FeaturCard  title="Stream Live" subtext="Schedule events in advance & build excitement with a countdown overlay." imgURL="Vector (2).svg"/>
           <FeaturCard  title="Monetization" subtext="Offer subscriptions or one-time purchases. Accept credit cards & PayPal." imgURL="Vector (3).svg"/>
           <FeaturCard title="Analytics" subtext="Know what your audience likes & how your content is performing." imgURL="Group 16.svg"/>
           <FeaturCard title="For all devices" subtext="Get organized on all devices" imgURL="Group 17.svg"/>
        </div>


    </section>
  )
}

export default Features