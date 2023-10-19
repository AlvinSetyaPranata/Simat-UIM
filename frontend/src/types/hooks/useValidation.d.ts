import { MutableRefObject } from "react"


// Individual Type
export type elementsRefsType = MutableRefObject<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>|null>[]

export type singleElementsRefType = MutableRefObject<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>|null>

export type validateType = (next: Promise<void>|(()=>void), ...elementsRefs: elementsRefsType) => void

export interface invalidObjectType {
    ref: singleElementsRefType|null,
    messege: string
}


// Param Types
export interface extendedParamsType {
    ref: singleElementsRefType,
    value: string,
    setIsValid: Dispatch<SetStateAction<invalidObjectType>>
}
export interface useValidationParamsType {
    extended?: (ref: elementsRefsType, setIsValid: Dispatch<SetStateAction<invalidObjectType>>) => void
}
export interface validateParamsType {
    next: () => void,
    elementsRefs: elementsRefsType[]
}


// Return Types
export type useValidationReturnType = [
    invalidInput: invalidObjectType,
    validate: validateType
]