import React from 'react';
import { motion } from 'framer-motion';

const MySkills = () => {
    return (
        <a className="myskills" href={'/myskills'}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                My Skills
            </motion.h3>
        </a>
    );
};

export default MySkills;
