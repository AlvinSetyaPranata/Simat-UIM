import { FC, useState } from "react";
import { motion } from "framer-motion";


interface propsType {
    type: string,
    msg: string,
}

const AlertDialog: FC<propsType> = ({type, msg}) => {
    const [hidden, setHidden] = useState(false)    
    
    const variants = {
        'animate' : {
            'top' : '50px',
            'transition' : {
                'ease' : 'easeIn',
                'duration' : 0.5,
            }
        },
        
        'animate-reverse' : {
            'top' : '-100px',
            'transition' : {
                'ease' : 'easeOut',
                'duration' : 0.7,
            }
        },
        
        'initial' : {
            'top' : '0px',
        }
    }

    
    return (
        <motion.div 
        className={`px-4 py-4 rounded-md bg-base absolute top-5 left-1/2 -translate-x-1/2 font-semibold flex items-center justify-between gap-4 `}
        variants={variants}
        animate={hidden ? 'animate-reverse' : 'animate'}
        initial='initial'
        >
            <div className="grid place-items-center px-6">
                <p className="whitespace-nowrap text-lg font-semibold text-white">{msg}</p>
            </div>
            <button className="relative float-right py-2 px-4 text-sm bg-white rounded-md" onClick={() => setHidden(true)}>X</button>
        </motion.div>
    )
}


export default AlertDialog