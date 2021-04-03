import React from 'react';
import Typewriter from 'typewriter-effect';
import { withRouter } from 'react-router-dom';
import classes from './Header.module.css';
import { isBrowser, isMobile } from "react-device-detect";
import BrowserMenu from '../BrowserMenu/BrowserMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = props => {

    const onLogoClick = () => props.history.push("/");

    const onInit = typewriter => {
        typewriter
            .typeString('> $ cd /root/')
            .pauseFor(500)
            .deleteChars(5)
            .typeString('home/')
            .start();
    };

    return (
        <div className={classes.Header}>
            <div className={classes.Inner}>
                <div className={classes.Logo} onClick={onLogoClick}>
                    <Typewriter onInit={onInit} />
                </div>
                <span className={classes.Right}>
                    {isBrowser && <BrowserMenu />}
                    {isMobile && <MobileMenu />}
                </span>
            </div>
        </div>
    );
}

export default withRouter(Header);