
export default async function getCsrfToken(){
    if (localStorage.getItem('csrftoken')){
        return
    }


    return await fetch(`${process.env.BASE_URL}/api/_get_csrf/`, {'method' : 'get'})
            .then((res) => {
                if (res.status != 200) return false

                return true
            })
            .catch(() => false)
        
}