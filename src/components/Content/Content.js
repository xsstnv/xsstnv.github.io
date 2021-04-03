import React from 'react';
import classes from './Content.module.css';
import Homepage from '../../pages/Homepage';
import { Route, Switch } from 'react-router-dom';

const Pages = () => {
    return (
        <div className={classes.Content}>
            <main className={classes.Main}>
                <Switch>
                    <Route exact path="/" component={Homepage} key="homepage" />
                </Switch>
            </main>
        </div>
    );
}

export default Pages;