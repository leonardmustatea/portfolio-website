import Link from 'next/link';
import React from 'react';
import { Theme } from '../globals';
import { Github, Twitter, Facebook, LinkedIn } from './SVGs';
const SocialIcons = (props: Theme) => {
    const color = props.theme === 'dark' ? '#2d2254' : '#ebebeb';
    return (
        <div className="social_icons_container">
            <div className="social_icons">
                <Link href={''}>
                    <Github width={25} height={25} fill={color} />
                </Link>
                <a
                    href={
                        'https://ro.linkedin.com/in/leonard-mustatea-3615843b?challengeId=AQHdQ5Bh3Es9egAAAX-Zpa-XXwFE7u5YutDHPzTTOzlEqb9uRoMz077ijE8U6ihIde5QZnxfrcVTrYpoGp4G3JWkrrhLDK7m9w&submissionId=9dccbd54-3846-dd16-ae55-04340edbd633'
                    }
                >
                    <LinkedIn width={25} height={25} fill={color} />
                </a>
                <Link href={'/'}>
                    <Facebook width={25} height={25} fill={color} />
                </Link>
                <Link href={''}>
                    <Twitter width={25} height={25} fill={color} />
                </Link>
            </div>
            <span className={`line ${props.theme}`}></span>
        </div>
    );
};

export default SocialIcons;
