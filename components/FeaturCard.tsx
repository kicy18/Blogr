import Image from "next/image"

type FeatureCardProps = {
    imgURL:string,
    title:string,
    subtext:string

}

const FeaturCard = ({title,subtext,imgURL}:FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-2 w-[230px]  ">
                <div className="flex flex-row gap-2">
                <Image src={imgURL}height={19} width={22} alt="icon"/>
                <h1 className="font-semibold">{title}</h1>

                </div>
                <p>{subtext}</p>
               
            </div>
  )
}

export default FeaturCard