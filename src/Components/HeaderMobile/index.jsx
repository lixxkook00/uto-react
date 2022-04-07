import { Link } from '@mui/material';
import React from 'react';
import './HeaderMobile.scss'


function HeaderMobile(props) {
    return (
        // <div className="box-shadow">
            
        // </div>

        <div className="header-mobile hide-on-pc">
            <a href="/" className="logo">
                <img src="./img/uto logo image.png" alt="" />
            </a>
            <div className="icon">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    );
}

export default HeaderMobile;