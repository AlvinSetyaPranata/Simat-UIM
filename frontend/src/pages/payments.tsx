import Home from "@/layouts/Home"

const Payments = () => {
    return (
        <>

        </>
    )
}

export default Payments


Payments.getLayout = function getLayout(page) {
    return (
        <Home>
            {page}
        </Home>
    )
}

