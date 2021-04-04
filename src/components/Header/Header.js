import React from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import { withRouter } from 'react-router-dom';

import classes from './Header.module.css';
import BrowserMenu from '../BrowserMenu/BrowserMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';

const Header = () => (
    <div className={classes.Header}>
        <div className={classes.Inner}>
            <Logo />
            <span className={classes.Right}>
                {isBrowser && <BrowserMenu />}
                {isMobile && <MobileMenu />}
            </span>
        </div>
    </div>
);

export default withRouter(Header)