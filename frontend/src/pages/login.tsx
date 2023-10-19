import { MutableRefObject, useRef } from "react"
import useAuth from "@/hooks/useAuth";
import { Input } from "@/components";
import useValidation from "@/hooks/useValidation";
import InputField from "@/components/Molecules/InputField/InputField";
import FormField from "@/components/Molecules/FormField/FormField";


export default function Login() {
    const usernameRef: MutableRefObject<undefined> = useRef()
    const passwordRef: MutableRefObject<undefined> = useRef()
    const formRef: MutableRefObject<undefined> = useRef()

    const authHandler = useAuth()
    const [isValid, validate] = useValidation()


    return (
        <div className="absolute left-1/2 -translate-x-1/2 rounded-md flex h-screen min-w-max font-common">
            <div className="flex flex-col items-center h-full py-16">
                <h3 className="text-2xl xl:text-4xl font-bold mb-[25px] px-12">Selamat Datang</h3>
                <img src="logo.png" alt="logo-uim" className="max-w-[130px]" />

                {/* form fields */}

                <FormField>
                    <InputField label="Username">
                        <Input ref={usernameRef} isInvalid={true}/>
                    </InputField>

                    <InputField label="Passsword">
                        <Input ref={passwordRef} type="password" />
                    </InputField>

                    {/* <button onClick={() => authHandler(usernameRef, passwordRef)} className="w-full py-2.5 bg-base rounded-md font-semibold text-white text-sm">Masuk</button> */}
                    <button onClick={() => validate(() => {}, usernameRef, passwordRef)} className="w-full py-2.5 bg-base rounded-md font-semibold text-white text-sm">Masuk</button>
                </FormField>

            </div>

        </div>
    )
}