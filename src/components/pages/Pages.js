import React from 'react';
import classes from './Pages.module.css';
import Homepage from '../../containers/pages/Homepage';
import { Route, Switch } from 'react-router-dom';

const Pages = () => {
    return (
        <div className={classes.Content}>
            <Switch>
                <Route exact path="/" component={Homepage} key="homepage" />
            </Switch>
        </div>
    );
}

export default Pages;