import { Dispatch, MutableRefObject, SetStateAction } from "react";
import getCsrfToken from "@/utils/getCsrfToken";
import Cookie from "js-cookie";
import { NextRouter } from "next/router";


async function tokenRefresher() {
    if (!localStorage.getItem('refresh')) {
        return false
    }

    const form = new FormData()
    form.append('refresh', localStorage.getItem('refresh'))

    return await fetch(`${process.env.BASE_URL}/auth/_refresh/`, {
        method: 'post',
        body: form
    }).then((res) => {
        const status = res.status
        
        if (status != 200) {
            // Unauthorized response which caused by the refresh token that has been expired
            // Remove expired Access and Refresh Token
            if (status == 401) {
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
            }            
            return false
        }

        const data = res.json()

        // update access token

        localStorage.setItem('access', data['access'])

        return true
    }).catch(() => false)

}


async function tokenChekcer() {

    const accessToken = localStorage.getItem('access')
    const refreshToken = localStorage.getItem('refresh')


    if (!refreshToken) return false

    // access token is not exists
    // refresh token
    if (!accessToken && refreshToken) {
        if (!tokenRefresher()) {
            return false
        }       
        
        return true
    }
    
    // check for access token whether is expired
    const postData = new FormData()
    postData.append('access', localStorage.getItem('access'))

    // verify Access token
    return await fetch(`${process.env.BASE_URL}/auth/_verify/`, {
        method: 'post',
        body: postData
    })
        .then((res) => {
            const status = res.status

            // Expired => false
            if (status != 200) return false
            
            return true
        })
        .catch(() => false)
}


function useAuth(errorHandler: Dispatch<SetStateAction<{type: string, msg: string}>>, navigator: NextRouter) {

    return async (username: MutableRefObject<HTMLInputElement>, password: MutableRefObject<HTMLInputElement>) => {

        const status_token = tokenChekcer()


        if(status_token) {
            navigator.push('/')
        }

        const status: Promise<boolean> = getCsrfToken()

        if (!status) {
            // error messeges
            errorHandler({'type' : 'error', 'msg' : 'Terjadi kesalahan server'})
            return
        }

        const csrftoken = Cookie.get("csrftoken")
        const data = new FormData()
        data.append('username', username.current.value)
        data.append('password', password.current.value)


        // continue to fetch api to the backend
        return await fetch(`${process.env.BASE_URL}/api/auth/login/`, {
            'method' : 'post',
            'body' : data,
            'headers' : {
                'X-CSRFToken': csrftoken
            }
        }).then((res) => {
            const status = res.status
            
            if (status !== 200) {
                errorHandler({'type' : 'warn', 'msg' : 'Pengguna/Sandi salah'})
                return
            }        

            const data = res.json()
            localStorage.setItem('access', data['access'])
            localStorage.setItem('refresh', data['refresh'])

            errorHandler({'type' : 'ok', 'msg' : 'Selamat Datang'})
            navigator.push('/')
            
        }).catch(() => {
            errorHandler({'type' : 'err', 'msg' : 'Terjadi Kesalahan Teknis'})
        })
            }
}

export {useAuth, tokenChekcer, tokenRefresher}