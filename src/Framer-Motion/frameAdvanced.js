import React from 'react';
import {motion, useCycle} from 'framer-motion'

const FramerAdvanced = ()=>{
    const [scale, setScale] = useCycle(3,1,2);
    return (
        <motion.div>
            <motion.p animate={{scale: scale}}>
                Piece of shit : {scale}
            </motion.p>
            <motion.button onClick={()=>setScale()}>Change</motion.button>
        </motion.div>
    )
}

export default FramerAdvanced;