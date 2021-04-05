import React from 'react';

import classes from './Content.module.css';
import Router from '../Router/Router';

const Pages = () => (
    <div className={classes.Content}>
        <main className={classes.Main}>
            <Router />
        </main>
    </div>
);

export default Pages;