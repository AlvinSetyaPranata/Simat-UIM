import { motion } from "framer-motion"



export default function HamburgerSVG({ isActive }) {
    // const rect1Variants = {
    //     active : {'width' : '50%', 'transition' : {'type' : 'spring'}},
    //     initial: {'width' : '100%'}
    // }
    const rect2Variants = {
        active: { 'width': '70%', 'transition': { 'ease': 'easeIn' } },
        initial: { 'width': '100%', 'transition': { 'ease': 'easeOut' } }
    }

    const rect3Variants = {
        active: { 'width': '40%', 'transition': { 'ease': 'easeIn' } },
        initial: { 'width': '100%', 'transition': { 'ease': 'easeOut' } }
    }


    return (
        <svg viewBox="0 0 100 80" className={`w-[17px] h-[37px] md:w-[20px] md:h-[40px] ${isActive ? "fill-white" : "fill-dark"}`}>

            <motion.rect rx="8" width="100" height="20" ></motion.rect>
            <motion.rect rx="8" y="30" width="100" height="20" variants={rect2Variants} animate={isActive ? 'active' : 'initial'}></motion.rect>
            <motion.rect rx="8" y="60" width="100" height="20" variants={rect3Variants} animate={isActive ? 'active' : 'initial'}></motion.rect>
        </svg>
    )
}