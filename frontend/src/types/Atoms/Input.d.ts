import React from "react"

export interface inputPropsType extends React.ComponentPropsWithoutRef<'input'> {
    invalidClassName?: string,
    isInvalid?: boolean
}