import React from "react"
import { inputPropsType } from "@/types/Atoms/Input"

const Input = React.forwardRef<HTMLInputElement, inputPropsType>((props, ref) => {
    const finalInvalidClassName = `border-red-500 ${props.invalidClassName}`
    const finalClassName = `w-full border-[1.9px] border-slate-300 rounded-md py-2.5 px-4 outline-none flex border-2 ${props.isInvalid ? finalInvalidClassName : ''}`


    return (
        <div className={finalClassName}>
            <input className="bg-transparent outline-none w-full text-sm" ref={ref} type={props.type === "password" ? "password" : undefined} required={props.required} />
        </div>
    )
})


export default Input