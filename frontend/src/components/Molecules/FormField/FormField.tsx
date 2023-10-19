import type { FormFieldPropsType } from "@/types/Molecules/FormField";

export default function FormField({children, className=""}: FormFieldPropsType): JSX.Element {

    const finalClassName = `grid grid-col-1 md:grid-col-2 xl:grid-col-4 px-4 py-6 gap-y-8 md:gap-y-12 ${className}`


    return (
        <div className={finalClassName}>
            {children}
        </div>
    )
}