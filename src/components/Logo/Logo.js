import React from 'react';
import Typewriter from 'typewriter-effect';
import { withRouter } from 'react-router-dom';

import classes from './Logo.module.css'

const Logo = props => {
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
        <div className={classes.Logo} onClick={onLogoClick}>
            <Typewriter onInit={onInit} />
        </div>
    );
}

export default withRouter(Logo);