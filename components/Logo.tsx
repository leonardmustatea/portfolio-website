import React from 'react';

const Logo = ({ trigger }: { trigger: boolean }) => {
    return trigger ? (
        <div className="logo_container">
            <div className="logo">
                <p />
                <div className="logo-border"></div>
            </div>
        </div>
    ) : null;
};

export default Logo;
