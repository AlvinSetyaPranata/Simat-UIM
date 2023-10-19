import type { PropsWithChildren } from "react";

interface baseFieldPropsType {
    className?: string
}

export type FormFieldPropsType = PropsWithChildren<baseFieldPropsType>