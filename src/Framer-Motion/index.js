import { motion, useCycle } from "framer-motion";
import React from "react";
import FramerAdvanced from "./frameAdvanced";

const FramerMotion = () => {
    const [x, setX] = useCycle(0,-10,-20,-30,-40,-50);
  return (
    <div style={{ textAlign: "center", fontFamily: "Segoe UI" }}>
      <motion.h2
        initial={{ x: 100, scale: 5 }}
        transition={{ type: "spring", duration: 2, bounce: 0.8 }}
        animate={{ x: x, scale: 1, rotate: 360 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Hello Framer Motion : {x}
      </motion.h2>
   
      <motion.button
        transition={{ duration: 1.1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={()=>setX()}
      >
        Button
      </motion.button>
      <FramerAdvanced/>
    </div>
  );
};

export default FramerMotion;
