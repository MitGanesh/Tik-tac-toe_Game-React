import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { motion } from 'framer-motion'

const Landing = () => {
    return (
        <motion.div
            className="landing"
            initial={{opacity: 0}}
            animate={{opacity: 1.5}}
            exit={{opacity: 0}}
            transition={{duration: 4,delay: 0.5}}
        >
            <Link to="/game">
                <button className='startBtn'>sTArT GAMe</button>
            </Link>
            <p className="footer">Copyright © 2022 gamerszone.io</p>
        </motion.div>
    )
}

export default Landing