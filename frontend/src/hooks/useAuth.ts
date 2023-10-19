import { MutableRefObject } from "react";


function useAuth() {
    
    return async (username?: MutableRefObject<undefined>, password?: MutableRefObject<undefined>) => {

        if (!username.current.value || !password.current.value) {
            return
        }

        // containue to fetch api to the backend
        return await fetch('http://127.0.0.1:8000/auth', {
            method: 'POST',
            headers: {
                
            }
        })
            .then((res) => console.log(res))
         .catch(() => alert("Server sedang tidak meresponse"))
    }
}

export default useAuth