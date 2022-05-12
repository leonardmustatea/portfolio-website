import React from 'react';
import { Theme } from '../globals';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Work = (props: Theme) => {
    return (
        // use target={'/work'} along side href to make the a tag open another tab on click
        <Link href={'/work'}>
            <motion.a
                className={`work ${props.theme}`}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{ duration: 1.5, delay: 1, bounce: 0.8 }}
            >
                <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Work
                </motion.h3>
            </motion.a>
        </Link>
    );
};

export default Work;
