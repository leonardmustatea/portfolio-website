import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { FaPowerOff } from 'react-icons/fa';

const PowerButton: NextPage = () => {
    return (
        <Link href={'/'}>
            <button className="power">
                <FaPowerOff />
            </button>
        </Link>
    );
};

export default PowerButton;
