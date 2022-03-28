import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    return (
        // use target={'/blog'} along side href to make the a tag open another tab on click
        <a className="blog" href={'/blog'}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Blog
            </motion.h3>
        </a>
    );
};

export default Blog;
