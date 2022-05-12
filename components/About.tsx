import React from 'react';
import { Theme } from '../globals';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = (props: Theme) => {
    return (
        <Link href={'/about'}>
            <motion.a
                className={`about ${props.theme}`}
                initial={{
                    opacity: 0,
                    x: -200,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{ type: 'spring', duration: 1.5, delay: 1, bounce: 0.8 }}
            >
                <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    About
                </motion.h3>
            </motion.a>
        </Link>
    );
};

export default About;
