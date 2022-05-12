import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Blog = () => {
    return (
        // use target={'/blog'} along side href to make the a tag open another tab on click
        <Link href={'/blog'}>
            <motion.a
                className="blog"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{ duration: 1.5, delay: 1, bounce: 0.8 }}
            >
                <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Blog
                </motion.h3>
            </motion.a>
        </Link>
    );
};

export default Blog;
