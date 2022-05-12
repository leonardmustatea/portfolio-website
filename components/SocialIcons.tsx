import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Theme } from '../globals';
import { Github, Twitter, Facebook, LinkedIn } from './SVGs';
const SocialIcons = (props: Theme) => {
    const color = props.theme === 'dark' ? '#2d2254' : '#ebebeb';
    return (
        <motion.div
            className="social_icons_container"
            initial={{
                height: 0,
            }}
            animate={{
                height: '18.5rem',
            }}
            transition={{
                type: 'spring',
                duration: 1,
                delay: 0.8,
            }}
        >
            <div className="social_icons">
                <motion.div
                    className="github"
                    initial={{ transform: 'scale(0)' }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1 }}
                >
                    <Link href={''}>
                        <Github width={25} height={25} fill={color} />
                    </Link>
                </motion.div>
                <motion.div
                    className="linkedin"
                    initial={{ transform: 'scale(0)' }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.2 }}
                >
                    <Link
                        href={
                            'https://ro.linkedin.com/in/leonard-mustatea-3615843b?challengeId=AQHdQ5Bh3Es9egAAAX-Zpa-XXwFE7u5YutDHPzTTOzlEqb9uRoMz077ijE8U6ihIde5QZnxfrcVTrYpoGp4G3JWkrrhLDK7m9w&submissionId=9dccbd54-3846-dd16-ae55-04340edbd633'
                        }
                    >
                        <LinkedIn width={25} height={25} fill={color} />
                    </Link>
                </motion.div>
                <motion.div
                    className="facebook"
                    initial={{ transform: 'scale(0)' }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.4 }}
                >
                    <Link href={'/'}>
                        <Facebook width={25} height={25} fill={color} />
                    </Link>
                </motion.div>
                <motion.div
                    className="twitter"
                    initial={{ transform: 'scale(0)' }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: 'spring', duration: 1, delay: 1.6 }}
                >
                    <Link href={''}>
                        <Twitter width={25} height={25} fill={color} />
                    </Link>
                </motion.div>
            </div>
            <span className={`line ${props.theme}`}></span>
        </motion.div>
    );
};

export default SocialIcons;
