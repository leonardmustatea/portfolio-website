import React from 'react';
import Profile from '../assets/Profile.jpeg';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
            className="intro_container"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="box"
            >
                <div className="text">
                    <h1>Hi,</h1>
                    <h3>{`I'm Leo.`}</h3>
                    <h6>I create test automation frameworks and other QE related tools.</h6>
                </div>
            </motion.div>
            <div className="box">
                <div className="pic_container">
                    <img className="pic" src={Profile.src} alt="Profile Picture" />
                </div>
            </div>
        </motion.div>
    );
};

export default Intro;
