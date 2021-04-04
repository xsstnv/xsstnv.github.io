import React from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './Content.module.css';
// import Homepage from '../../pages/Homepage';
import { routes } from '../../routes';

const Pages = () => (
    <div className={classes.Content}>
        <main className={classes.Main}>
            {routes}
            {/* <Switch>
                <Route exact path="/" component={Homepage} key="homepage" />
            </Switch> */}
        </main>
    </div>
);

export default Pages;