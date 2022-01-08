import React from 'react';
import './Header.scss';
import logo from '../images/logo.png';
import flower from '../images/flower.jpg';
Header.propTypes = {};

function Header(props) {
    return (
        <header>
            <div className="header">
                <div className="header__logo">
                    <img srcSet={logo} alt="logo" />
                </div>
                <div className="header__info">
                    <div className="header__detail">
                        <p className="header__detail-title">Handicrafted by</p>
                        <p className="header__detail-name">Jim HLS</p>
                    </div>
                    <div className="header__info-img"><img alt="" srcSet={flower} /></div>
                </div>
            </div>
            <div className="banel">
                <h1>A joke a day keeps doctor away</h1>
                <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
            </div>
        </header>
    );
}

export default Header;