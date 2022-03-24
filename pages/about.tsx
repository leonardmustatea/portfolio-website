import React from 'react';
import { NextPage } from 'next';
import PowerButton from '../components/PowerButton';

const About: NextPage = () => {
    return (
        <>
            <PowerButton />
            <div className="about_container">About page</div>
        </>
    );
};

export default About;
