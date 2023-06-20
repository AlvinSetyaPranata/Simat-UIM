import Home from "@/layouts/Home"


function Details() {

    return (
        <></>        
    )
}

export default Details

Details.getLayout = function getLayout(page) {
    return (
        <Home>
            {page}
        </Home>
    )
}