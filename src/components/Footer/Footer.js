import React from 'react';
import classes from './Footer.module.css';

const Footer = () => (
    <div className={classes.Footer}>
        <div className={classes.Inner}>
            <div className={classes.Content}>
                Project maintained by&#160;<a href="https://github.com/xsstnv/">Martin Stoynov</a>
            </div>
        </div>
    </div>
)

export default Footer;