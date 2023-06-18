import { useRef, useState } from "react"
import {useAuth} from "@/hooks/useAuth";
import AlertDialog from "@/components/AlertDialog";
import { useRouter } from "next/router";
import Cookies from "js-cookie"



async function getCsrf() {
    const _csrf = await fetch(`${process.env.BASE_URL}/api/_get_csrf/`, {method: 'GET'})

    // console.log(_csrf.headers)
  
}


export default function Login() {
    

    // getCsrf()


    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const [errorMessege, setErrorMessege] = useState({type: '', msg: ''})
    const router = useRouter()

    const authHandler = useAuth(setErrorMessege, router);

    const handleSubmit = (event) => {
        event.preventDefault();
        authHandler(usernameRef, passwordRef)
    }


    return (
        <div className="absolute left-1/2 -translate-x-1/2 rounded-md flex h-screen min-w-max">
            {errorMessege.type  && <AlertDialog type={errorMessege.type} msg={errorMessege.msg}/>}

            <div className="flex flex-col items-center h-full py-16">
                <h3 className="text-3xl xl:text-4xl font-bold mb-[50px] px-12">Selamat Datang</h3>
                <img src="logo.png" alt="logo-uim" className="max-w-[150px]" />

                {/* form fields */}

                <form onSubmit={(e) => handleSubmit(e)} method="post" action="" className="grid gap-y-14 min-w-full mt-[100px]">
                    <div className="w-full grid gap-y-2">
                        <label htmlFor="username" className="font-semibold">Nama Pengguna</label>
                        <input ref={usernameRef} type="text" name="username" className="bg-slate-200 rounded-md py-2 px-4 outline-none" required/>
                    </div>

                    <div className="w-full grid gap-y-2">
                        <label htmlFor="password" className="font-semibold">Kata Sandi</label>
                        <input ref={passwordRef} type="password" name="password" className="bg-slate-200 rounded-md py-2 px-4 outline-none" required/>
                    </div>

                    <button  type="submit" className="w-full py-2 bg-base rounded-md font-semibold text-white">Masuk</button>
                </form>
            </div>

        </div>
    )
}