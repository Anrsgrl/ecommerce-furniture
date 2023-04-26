import React from 'react';
import "./hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div className="hero page-container mb-4">
            <div className="hero-content">
                <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "spring" }}>Style <br /> Comfort& <br /> Affordable</motion.h1>
                <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "spring" }} className='general-button mt-4'>Explore Store</motion.button>
            </div>
        </div>
    )
}

export default Hero;