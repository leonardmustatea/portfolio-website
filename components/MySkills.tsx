import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MySkills = () => {
    return (
        <Link href={'/myskills'}>
            <motion.a
                className="myskills"
                initial={{
                    opacity: 0,
                    x: 200,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{ type: 'spring', duration: 1.5, delay: 1, bounce: 0.8 }}
            >
                <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    My Skills
                </motion.h3>
            </motion.a>
        </Link>
    );
};

export default MySkills;
