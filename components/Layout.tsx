import React from 'react';
import Header from './Header';
import PowerButton from './PowerButton';

const Layout = ({ children }: { children: any }) => {
    return (
        <div className="content">
            <Header />
            <PowerButton />
            {children}
        </div>
    );
};

export default Layout;
