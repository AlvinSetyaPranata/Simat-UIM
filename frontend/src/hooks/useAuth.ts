import { MutableRefObject } from "react";


function useAuth() {
    
    return async (username: MutableRefObject<HTMLInputElement>, password?: MutableRefObject<HTMLInputElement>) => {

        if (!username.current.value || !password.current.value) {
            return
        }

        // containue to fetch api to the backend
        return await fetch('http://127.0.0.1:8000/auth', {
            method: 'POST',
            headers: {
                
            }
        })
        .then((res) => alert("OK"))
        .catch(() => alert("Server sedang tidak meresponse"))
    }
}

export default useAuth