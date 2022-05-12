import React from 'react';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';

/**
 * This is the app
 * @return {JSX.Element}: The JSX code for _app.tsx file
 */
function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AnimatePresence exitBeforeEnter>
            <CookiesProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CookiesProvider>
        </AnimatePresence>
    );
}

export default App;
