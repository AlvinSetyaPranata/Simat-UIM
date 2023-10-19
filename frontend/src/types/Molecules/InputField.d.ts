import React from "react";


export default interface inputFieldPropsType {
    label: string,
    className?: string,
    isValid?: boolean,
    children?: React.ReactNode|JSX.Element|never[]
}

// export type inputFieldPropsType = PropsWithChildren<baseInputFieldElements>
// DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>