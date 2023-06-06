import { Dispatch, MutableRefObject, SetStateAction } from "react";
// import getCsrfToken from "@/utils/getCsrfToken";
import { NextRouter } from "next/router";
import Cookies from "js-cookie"



function useAuth(errorHandler: Dispatch<SetStateAction<{type: string, msg: string}>>, navigator: NextRouter) {

    return async (username: MutableRefObject<HTMLInputElement>, password: MutableRefObject<HTMLInputElement>) => {


        // const csrftoken = Cookie.get("csrftoken")
        const data = new FormData()
        data.append('username', username.current.value)
        data.append('password', password.current.value)


        // continue to fetch api to the backend
        return await fetch(`${process.env.BASE_URL}/api/auth/login/`, {
            'method' : 'post',
            'body' : data,
        }).then((res) => {
            const status = res.status
            
            if (status !== 200) {
                errorHandler({'type' : 'warn', 'msg' : 'Pengguna/Sandi salah'})
                return
                
            }   
            // console.log(res.json())

            return res.json()
            
        }).then((data) => {

            Cookies.set("access", data["access"]["value"], {
                expires: data["access"]["expires"],
                sameSite: data["access"]["samesite"],
                secure: data["access"]["secure"]
            })
            Cookies.set("refresh", data["refresh"]["value"], {
                expires: data["refresh"]["expires"],
                sameSite: data["refresh"]["samesite"],
                secure: data["refresh"]["secure"]
            })
            Cookies.set("csrftoken", data["csrftoken"], {
                sameSite: "Strict",
                secure: "true"
            })
            navigator.push('/')
        })
        
        .catch((e) => {
            console.log(e)
            errorHandler({'type' : 'err', 'msg' : 'Terjadi Kesalahan Teknis'})
        })
            }
}

export {useAuth }