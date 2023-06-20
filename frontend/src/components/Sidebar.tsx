import InfoSVG from "./svg/InfoSVG";
import AssignmentSVG from "./svg/AssignmentSVG";
import HamburgerSVG from "./svg/HamburgerSVG";
import PersonSVG from "./svg/PersonSVG";
import WalletSVG from "./svg/WalletSVG";
import AccountSVG from "./svg/AccountSVG";
import LogoutSVG from "./svg/LogoutSVG";
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useRouter } from "next/router";



export default function Sidebar() {
    const [revealed, setRevealed] = useState(true)
    const [isNavActive, setIsNavActive] = useState(1)
    const router = useRouter()

    const paths = ['/details', '/assignment', '/payment', '/settings', '/about', '/logout']


    const baseNavButtonStyle = `hover:cursor-pointer flex gap-x-4 relative p-4 w-[400px] bg-dark items-center rounded-xl flex-shrink-0`


    const sidebarVariants = {
        reveal: { 'transform': 'translateX(0)' },
        collapse: { 'transform': 'translateX(-350px)' }
    }

    const hamburgerVariants = {
        reveal: {
            "transform": "translateX(230px)",
            "background-color": "white",
        },
        collapse: {
            "transform": "translateX(0)",
            "background-color": "#00A973",
        }

    }


    const onClickHandler = (id: number) => {
        setIsNavActive(id)

        router.push(paths[id - 1])
    }


    useEffect(() => {
        switch (router.pathname) {
            case "/details":
                setIsNavActive(1)
                break
            case "/assignment":
                setIsNavActive(2)
                break
            case "/payment":
                setIsNavActive(3)
                break
            case "/settings":
                setIsNavActive(4)
                break
            case "/about":
                setIsNavActive(5)
                break
            case "/logout":
                setIsNavActive(6)
                break
        }
    }, [])


    return (
        <div className={`fixed ${revealed ? 'md:sticky' : 'fixed'}`}>
            <motion.button className={`absolute z-10 px-5 py-2 rounded-full h-max ml-6 ${revealed ? 'mt-11' : 'mt-6'}`}
                onClick={() => setRevealed(!revealed)}
                animate={revealed ? 'reveal' : 'collapse'}
                variants={hamburgerVariants}
            >
                <HamburgerSVG isActive={revealed} />
            </motion.button>

            <motion.div className={`overflow-hidden bg-dark min-h-screen max-h-screen py-10  flex-col md:block items-center gap-y-14 left-0 min-w-[350px] max-w-[350px] pl-6 ${revealed ? 'flex' : 'hidden'} md:!flex`}
                animate={revealed ? 'reveal' : 'collapse'}
                variants={sidebarVariants}
            >
                <div className="flex w-full justify-between overflow-hidden">
                    <div className={`flex gap-x-4 items-center flex-shrink-0 ease-in-out ${revealed ? 'opacity-1' : 'opacity-0'} pl-4`}>
                        <img src="/logo.png" alt="logo" className={`w-[50px] h-[50px] ${revealed ? 'opacity-1' : 'opacity-0'}`} />
                        <div>
                            <h2 className="font-bold text-white text-2xl">Dasbor</h2>
                            <h3 className="font-semibold text-white text-xl">SIMAT</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-y-8 w-full overflow-x-hidden overflow-y-auto pl-2">
                    <div className={`${baseNavButtonStyle} hover:bg-white [&_#person]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 1 ? 'bg-white [&>p]:text-dark [&_#person]:fill-dark rounded-full' : ''}`} onClick={() => onClickHandler(1)}>
                        <PersonSVG />
                        <p className={`text-white font-common font-semibold text-sm md:text-base  flex-shrink-0 ${!revealed ? 'hidden' : ''}`}>Detail Mahasiswa</p>
                    </div>
                    <div className={`${baseNavButtonStyle} hover:bg-white [&_#assignment]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 2 ? 'rounded-full bg-white [&>p]:text-dark [&_#assignment]:fill-dark' : ''}`} onClick={() => onClickHandler(2)}>
                        <AssignmentSVG  />
                        <p className={`text-white font-common font-semibold text-sm md:text-base  flex-shrink-0 ${!revealed ? 'hidden' : ''}`}>Mata Kuliah</p>
                    </div>
                    <div className={`${baseNavButtonStyle} hover:bg-white [&_#wallet]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 3 ? 'rounded-full bg-white [&>p]:text-dark [&_#wallet]:fill-dark' : ''}`} onClick={() => onClickHandler(3)}>
                        <WalletSVG  />
                        <p className={`text-white font-common font-semibold text-sm md:text-base  flex-shrink-0 ${!revealed ? 'hidden' : ''}`}>Pembayaran</p>
                    </div>
                    <div className={`${baseNavButtonStyle} hover:bg-white [&_#account]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 4 ? 'rounded-full bg-white [&>p]:text-dark [&_#account]:fill-dark' : ''}`} onClick={() => onClickHandler(4)}>
                        <AccountSVG  />
                        <p className={`text-white font-common font-semibold text-sm md:text-base  flex-shrink-0 ${!revealed ? 'hidden' : ''}`}>Pengaturan Akun</p>
                    </div>
                    <div className={`${baseNavButtonStyle}  hover:bg-white [&_#info]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 5 ? 'rounded-full bg-white [&>p]:text-dark [&_#info]:fill-dark' : ''}`} onClick={() => onClickHandler(5)}>
                        <InfoSVG  />
                        <p className={`text-white font-common font-semibold text-sm md:text-base  flex-shrink-0 ${!revealed ? 'hidden' : ''}`}>Tentang Applikasi</p>
                    </div>
                    <div className={`${baseNavButtonStyle}  hover:bg-white [&_#logout]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 6 ? 'rounded-full bg-white [&>p]:text-dark [&_#logout]:fill-dark' : ''}`} onClick={() => onClickHandler(6)}>
                        <LogoutSVG />
                        <p className={`text-white font-common font-semibold text-sm md:text-base  flex-shrink-0 ${!revealed ? 'hidden' : ''}`}>keluar</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}