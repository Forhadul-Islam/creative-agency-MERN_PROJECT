import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Header({ tag }) {
    console.log(tag);
    return (
        <>
            <div className="dashboard__main--header-tag">{tag}</div>
            <div className="dashboard__main--header-user">
                <FaUserCircle style={{ paddingRight: '5px', color: '#766c9d' }} />
                Mizanur Rahaman
            </div>
        </>
    );
}

export default Header;
