import React from 'react';
import { Theme } from '../globals';
import { motion } from 'framer-motion';

const Work = (props: Theme) => {
    console.log(props);
    return (
        // use target={'/work'} along side href to make the a tag open another tab on click
        <a className={`work ${props.theme}`} href={'/work'}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Work
            </motion.h3>
        </a>
    );
};

export default Work;
