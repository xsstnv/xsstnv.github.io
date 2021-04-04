import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { resources } from './demo/urls.config.js';
// import Content from './pages/Content/Content';
import Homepage from './pages/Homepage';
import StatusPage from './pages/StatusPage';
import { Result } from 'antd';

export const routes = (
    <Switch>
        {/* {
            resources && resources.length && resources.map((resource,key) => (
                <Route key={key} exact path={resource.url}>
                    <Content path={resource.path}/>
                </Route>
            ))
        } */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/:any" component={StatusPage} render={() => <Result status="404" />} />
    </Switch>
);