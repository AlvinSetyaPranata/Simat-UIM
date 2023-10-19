import { MutableRefObject, useRef } from "react"
import useAuth from "@/hooks/useAuth";
import { Input } from "@/components";
import useValidation from "@/hooks/useValidation";
import InputField from "@/components/Molecules/InputField/InputField";
import FormField from "@/components/Molecules/FormField/FormField";
import InputWithVisibility from "@/components/Atoms/InputWithVisibility";


export default function Login() {
    const usernameRef: MutableRefObject<undefined> = useRef()
    const passwordRef: MutableRefObject<undefined> = useRef()
    const formRef: MutableRefObject<undefined> = useRef()

    const authHandler = useAuth()
    const [isValid, validate] = useValidation()


    const testing = (username: MutableRefObject<HTMLInputElement>, password: MutableRefObject<HTMLInputElement>) => {
        console.log(username)
    }


    return (
        <div className="absolute left-1/2 -translate-x-1/2 rounded-md flex h-screen w-[400px] max-w-screen">
            <div className="flex flex-col items-center h-full py-12 w-full">
                <img src="logo.png" alt="logo-uim" className="max-w-[130px] mb-[40px]" />
                <h3 className="text-2xl font-bold mb-[25px] px-12">Selamat Datang</h3>

                {/* form fields */}

                <FormField>
                    <InputField label="Username">
                        <Input ref={usernameRef}/>
                    </InputField>

                    <InputField label="Passsword">
                        <InputWithVisibility isInvalid={true} ref={passwordRef} />
                    </InputField>

                    {/* <button onClick={() => authHandler(usernameRef, passwordRef)} className="w-full py-2.5 bg-base rounded-md font-semibold text-white text-sm">Masuk</button> */}
                    {/* <button onClick={() => validate(authHandler(usernameRef, passwordRef), usernameRef, passwordRef)} className="w-full py-2.5 bg-base rounded-md font-semibold text-white text-sm">Masuk</button> */}
                    <button onClick={() => validate(testing(usernameRef, passwordRef), usernameRef, passwordRef)} className="w-full py-2.5 bg-base rounded-md font-semibold text-white text-sm">Masuk</button>
                </FormField>

            </div>

        </div>
    )
}