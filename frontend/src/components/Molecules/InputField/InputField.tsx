import Input from "@/components/Atoms/Input"
import inputFieldPropsType from "@/types/Molecules/InputField"


export default function InputField({label, className, children, isValid=true}: inputFieldPropsType): JSX.Element {

    const finalClassName = `w-full grid gap-y-2 ${className}`

    return (
        <div className={finalClassName}>
            <label className="font-semibold text-black text-sm">{label}</label>
            {children ? children : <Input />}
            
            {!isValid && <span>This is not valid</span>}
        </div>
    )
}