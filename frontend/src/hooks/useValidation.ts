import { Dispatch, SetStateAction, useState } from "react";
import type { invalidObjectType, useValidationReturnType, elementsRefsType, singleElementsRefType } from "@/types/hooks/useValidation";


// Default function and const
function __defaultExtended(ref: singleElementsRefType, value: string, setInvalidInput: Dispatch<SetStateAction<invalidObjectType>>) {} // Dummy Function

const __defaultInvalidObject: invalidObjectType = {
    ref: null,
    messege: ""
}

// Builtin validation functions

function isEmpty(ref: singleElementsRefType, value: string, setInvalidInput: Dispatch<SetStateAction<invalidObjectType>>): void {

    if (value) return
    
    setInvalidInput({ref: ref, messege: "Cannot be empty"})
}




export default function useValidation(extended=__defaultExtended): useValidationReturnType {
    const [invalidInput, setInvalidInput] = useState<invalidObjectType>(__defaultInvalidObject)

    return [invalidInput, (next: () => void, ...elementsRefs: elementsRefsType) => {
        elementsRefs.map((ref) => {
            const value = ref.current.value.toString()

            // Do basic validation
            isEmpty(ref, value ,setInvalidInput)

            // Do validation that extended from user
            extended(ref, value, setInvalidInput)

            next()
        })
    }]
}