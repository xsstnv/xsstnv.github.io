import React from 'react';

import classes from './Content.module.css';
import Routes from '../Routes/Routes';

const Pages = () => (
    <div className={classes.Content}>
        <main className={classes.Main}>
            <Routes />
        </main>
    </div>
);

export default Pages;