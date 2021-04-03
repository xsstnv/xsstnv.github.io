import React from 'react';
import { withRouter } from 'react-router-dom';

import Toggle from '../Toggle/Toggle';
import classes from './BrowserMenu.module.css';
import Menu from '../Menu/Menu';

const BrowserMenu = () => (
    <React.Fragment>
        <Menu classes={classes} />
        <Toggle />
    </React.Fragment>
);

export default withRouter(BrowserMenu);