import InfoSVG from "./svg/InfoSVG";
import AssignmentSVG from "./svg/AssignmentSVG";
import HamburgerSVG from "./svg/HamburgerSVG";
import PersonSVG from "./svg/PersonSVG";
import WalletSVG from "./svg/WalletSVG";
import AccountSVG from "./svg/AccountSVG";
import LogoutSVG from "./svg/LogoutSVG";
import { useState } from "react"
import { motion } from "framer-motion";




export default function Sidebar() {
    const [revealed, setRevealed] = useState(false)
    const [isNavActive, setIsNavActive] = useState(1)


    const ballonStyle = `after:absolute after:-z-10 after:font-bold after:text-base after:cursor-default after:outline-none after:bg-dark after:px-4 after:py-3 after:font-common after:rounded-xl after:text-white after:whitespace-nowrap after:opacity-0 after:left-0 ${!revealed ? 'after:translate-x-[100px] hover:after:opacity-[100%] hover:after:ease-in hover:after:duration-500' : ''} `
    
    const baseNavButtonStyle = `static hover:cursor-pointer flex gap-x-4 pl-4 pr-12 w-full py-4 bg-dark items-center rounded-full flex-shrink-0 ${revealed ? 'translate-x-[24px]' : 'gap-x-8'} ${ballonStyle}`


    // before:absolute before:-z-10 before:p-6 before:bg-red-500 before:translate-x-[150%] before:text-white before:content-['hello'] before:text-sm

    const hamburgerVariants = {
        reveal: { 'width': 'max-content' },
        collapse: { 'width': '75px' }
    }



    return (
        <motion.div className={`bg-dark fixed min-h-screen py-10 flex flex-col items-center gap-y-20`}
            animate={revealed ? 'reveal' : 'collapse'}
            variants={hamburgerVariants}
        >
            <div className="flex w-full justify-between overflow-hidden">
                <div className={`flex gap-x-4 items-center flex-shrink-0 ease-in-out ${revealed ? 'opacity-1' : 'opacity-0'} pl-4`}>
                    <img src="/logo.png" alt="logo" className={`w-[50px] h-[50px] ${revealed ? 'opacity-1' : 'opacity-0'}`} />
                    <div>
                        <h2 className="font-bold text-white text-2xl">Dasbor</h2>
                        <h3 className="font-semibold text-white text-xl">SIMAT</h3>
                    </div>
                </div>

                <button className={`sticky px-5 py-2 rounded-full h-max ${revealed ? 'left-0 bg-dark' : 'right-[50%] translate-x-[15%] bg-white'}`} onClick={() => setRevealed(!revealed)}>
                    <HamburgerSVG isActive={revealed} />
                </button>
            </div>

            <div className="grid place-items-center gap-y-8 w-full overflow-clip pl-2">
                <div className={`${baseNavButtonStyle} after:content-['Detail_Mahasiswa'] hover:bg-white [&_#person]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 1 ? 'bg-white [&>p]:text-dark [&_#person]:fill-dark' : ''}`} onClick={() => setIsNavActive(1)}>
                    <PersonSVG />
                    <p className="text-white font-common font-semibold text-sm md:text-base  flex-shrink-0">Detail Mahasiswa</p>
                </div>
                <div className={`${baseNavButtonStyle} after:content-['Mata_Kuliah'] hover:bg-white [&_#assignment]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 2 ? 'bg-white [&>p]:text-dark [&_#assignment]:fill-dark' : ''}`} onClick={() => setIsNavActive(2)}>
                    <AssignmentSVG color="white" />
                    <p className="text-white font-common font-semibold text-sm md:text-base flex-shrink-0">Mata Kuliah</p>
                </div>
                <div className={`${baseNavButtonStyle} after:content-['Pembayaran_Mahasiswa'] hover:bg-white [&_#wallet]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 3 ? 'bg-white [&>p]:text-dark [&_#wallet]:fill-dark' : ''}`} onClick={() => setIsNavActive(3)}>
                    <WalletSVG color="white" />
                    <p className="text-white font-common font-bold text-sm md:text-base flex-shrink-0">Pembayaran Mahasiswa</p>
                </div>
                <div className={`${baseNavButtonStyle} after:content-['Detail_Mahasiswa'] hover:bg-white [&_#account]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 4 ? 'bg-white [&>p]:text-dark [&_#account]:fill-dark' : ''}`} onClick={() => setIsNavActive(4)}>
                    <AccountSVG color="white" />
                    <p className="text-white font-common font-bold text-sm md:text-base flex-shrink-0">Pengaturan Akun</p>
                </div>
                <div className={`${baseNavButtonStyle} after:content-['Detail_Mahasiswa'] hover:bg-white [&_#info]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 5 ? 'bg-white [&>p]:text-dark [&_#info]:fill-dark' : ''}`} onClick={() => setIsNavActive(5)}>
                    <InfoSVG color="white" />
                    <p className="text-white font-common font-bold text-sm md:text-base flex-shrink-0">Tentang Applikasi</p>
                </div>
                <div className={`${baseNavButtonStyle} after:content-['Detail_Mahasiswa'] hover:bg-white [&_#logout]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 6 ? 'bg-white [&>p]:text-dark [&_#logout]:fill-dark' : ''}`} onClick={() => setIsNavActive(6)}>
                    <LogoutSVG color="white" />
                    <p className="text-white font-common font-bold text-sm  md:text-base flex-shrink-0">keluar</p>
                </div>
            </div>
        </motion.div>
    )
}