import React from 'react';
import { Theme } from '../globals';
import { motion } from 'framer-motion';

const About = (props: Theme) => {
    return (
        <a className={`about ${props.theme}`} href={'/about'}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                About
            </motion.h3>
        </a>
    );
};

export default About;
