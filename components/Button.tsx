type ButtonProps = {
    label:string,
    variant?:string,
   borderColor?:string
    textColor:string
}

const Button = ({label,variant,textColor,borderColor}:ButtonProps) => {
  return (
    <button className={`w-[165px] ${variant} ${textColor} h-[46px] rounded-full text-[14px] ${borderColor} `}>
        {label}

    </button>
  )
}

export default Button