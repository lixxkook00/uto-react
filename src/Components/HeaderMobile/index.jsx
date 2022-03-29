import React from 'react';
import './HeaderMobile.scss'

function HeaderMobile(props) {
    return (
        // <div className="box-shadow">
            
        // </div>

        <div className="header-mobile hide-on-pc">
            <div className="logo">
                <img src="./img/uto logo image.png" alt="" />
            </div>
            <div className="icon">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    );
}

export default HeaderMobile;