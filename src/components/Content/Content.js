import React from 'react';

import classes from './Content.module.css';
import { routes } from '../../routes';

const Pages = () => (
    <div className={classes.Content}>
        <main className={classes.Main}>
            {routes}
        </main>
    </div>
);

export default Pages;