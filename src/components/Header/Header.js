import React from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTheme } from '../../redux/actions/theme';
import classes from './Header.module.css';
import BrowserMenu from '../BrowserMenu/BrowserMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';

const Header = props => {

    console.log(props)

    return (
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
}


const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
  getTheme: () => dispatch(getTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
