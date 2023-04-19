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

    const hamburgerVariants = {
        reveal: { 'width': 'max-content' },
        collapse: { 'width': '80px' }
    }



    return (
        <motion.div className={`bg-dark sticky min-h-screen py-10 flex flex-col items-center gap-y-20`}
            animate={revealed ? 'reveal' : 'collapse'}
            variants={hamburgerVariants}
        >
            <div className="flex w-full justify-between pl-4 overflow-hidden">
                <div className={`flex gap-x-4 items-center flex-shrink-0 ease-in-out ${revealed ? 'opacity-1' : 'opacity-0'}`}>
                    <img src="/logo.png" alt="logo" className={`w-[50px] h-[50px] ${revealed ? 'opacity-1' : 'opacity-0'}`} />
                    <div>
                        <h2 className="font-bold text-white text-2xl">Dasbor</h2>
                        <h3 className="font-semibold text-white text-xl">SIMAT</h3>
                    </div>
                </div>

                <button className={`sticky px-4 py-2 rounded-full h-max ${revealed ? 'left-0 bg-dark' : 'right-[50%] translate-x-[25%] bg-white'}`} onClick={() => setRevealed(!revealed)}>
                    <HamburgerSVG isActive={revealed} />
                </button>
            </div>

            <div className="grid place-items-center gap-y-8 w-full pl-2 overflow-clip">
                <div className={`static hover:cursor-pointer flex gap-x-8 px-4 w-full py-4 bg-dark items-center rounded-full flex-shrink-0 hover:bg-white [&_#person]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 1 ? 'bg-white [&>p]:text-dark [&_#person]:fill-dark' : ''}`} onClick={() => setIsNavActive(1)}>
                    <PersonSVG />
                    <p className="text-white font-common font-semibold text-base  flex-shrink-0">Detail Mahasiswa</p>
                </div>
                <div className={`static hover:cursor-pointer flex gap-x-8 px-4 w-full py-4 bg-dark items-center rounded-full flex-shrink-0 hover:bg-white [&_#assignment]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 2 ? 'bg-white [&>p]:text-dark [&_#assignment]:fill-dark' : ''}`} onClick={() => setIsNavActive(2)}>
                    <AssignmentSVG color="white" />
                    <p className="text-white font-common font-semibold text-base flex-shrink-0">Mata Kuliah</p>
                </div>
                <div className={`static hover:cursor-pointer flex gap-x-8 px-4 w-full py-4 bg-dark items-center rounded-full flex-shrink-0 hover:bg-white [&_#wallet]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 3 ? 'bg-white [&>p]:text-dark [&_#wallet]:fill-dark' : ''}`} onClick={() => setIsNavActive(3)}>
                    <WalletSVG color="white" />
                    <p className="text-white font-common font-bold text-base flex-shrink-0">Pembayaran Mahasiswa</p>
                </div>
                <div className={`static hover:cursor-pointer flex gap-x-8 px-4 w-full py-4 bg-dark items-center rounded-full flex-shrink-0 hover:bg-white [&_#account]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 4 ? 'bg-white [&>p]:text-dark [&_#account]:fill-dark' : ''}`} onClick={() => setIsNavActive(4)}>
                    <AccountSVG color="white" />
                    <p className="text-white font-common font-bold text-base flex-shrink-0">Pengaturan Akun</p>
                </div>
                <div className={`static hover:cursor-pointer flex gap-x-8 px-4 w-full py-4 bg-dark items-center rounded-full flex-shrink-0 hover:bg-white [&_#info]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 5 ? 'bg-white [&>p]:text-dark [&_#info]:fill-dark' : ''}`} onClick={() => setIsNavActive(5)}>
                    <InfoSVG color="white" />
                    <p className="text-white font-common font-bold text-base flex-shrink-0">Tentang Applikasi</p>
                </div>
                <div className={`static hover:cursor-pointer flex gap-x-8 px-4 w-full py-4 bg-dark items-center rounded-full flex-shrink-0 hover:bg-white [&_#logout]:hover:fill-dark [&>p]:hover:text-dark ${isNavActive === 6 ? 'bg-white [&>p]:text-dark [&_#logout]:fill-dark' : ''}`} onClick={() => setIsNavActive(6)}>
                    <LogoutSVG color="white" />
                    <p className="text-white font-common font-bold text-base flex-shrink-0">keluar</p>
                </div>
            </div>
        </motion.div>
    )
}