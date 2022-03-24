import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Logo from '../components/Logo';
import { useCookies } from 'react-cookie';
import PowerButton from '../components/PowerButton';
import SocialIcons from '../components/SocialIcons';

const title = `Leonard's Portfolio website`;
const Home: NextPage = () => {
    const [timedPopup, setTimedPopup] = useState(true);
    const [showLogo, setShowLogo] = useState<boolean>(true);
    const [cookies, setCookie] = useCookies(['seen']);

    useEffect(() => {
        const now = new Date();
        if (!cookies.seen) {
            setShowLogo(true);
            setCookie('seen', true, { maxAge: now.getSeconds() + 600 });
        } else {
            setShowLogo(false);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(false);
        }, 4500);
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="CV" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600&family=Pacifico&family=Source+Sans+Pro:wght@400;600;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <>
                {showLogo && <Logo trigger={timedPopup} />}
                <PowerButton />
                <div className="homepage_container">
                    <div className="new-logo">
                        <span data-text="<L>|" className="first">
                            {'<L>|'}
                        </span>
                        <span className="second">M</span>
                    </div>
                    <span className="click_me">click me</span>
                    <SocialIcons />
                </div>
            </>
        </>
    );
};

export default Home;
