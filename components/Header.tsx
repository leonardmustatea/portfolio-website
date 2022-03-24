import Link from 'next/link';
import React from 'react';
import MyLogo from '../assets/BigLogo.svg';

/**
 * This represents the Header component
 * @return {JSX.Element} Header component
 */
function Header(): JSX.Element {
    return (
        <div className="header-container">
            <div className="header-logo">
                <Link href={'/'}>
                    <img src={MyLogo.src} className="logo" />
                </Link>
            </div>
            <Link href="mailto:leonard.mustatea@gmail.com">
                <a className="say_hi">Say hi...</a>
            </Link>
        </div>
    );
}

export default Header;
