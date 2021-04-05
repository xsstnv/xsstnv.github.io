import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRouting } from '../../redux/actions/routing';
import MarkdownReader from '../MarkdownReader/MarkdownReader';
import { config } from '../../config';

const Router = ({ routing = {}, getRouting = () => null }) => {

    React.useEffect(() => {
        getRouting();
        // eslint-disable-next-line
    }, []);

    return (
        <Switch>
            { routing && routing.routing && routing.routing.length && routing.routing.map((item, key) => (
                <Route key={key} exact path={item.url}>
                    <MarkdownReader path={config[process.env.REACT_APP_ENV].pagesPath + item.path} />
                </Route>
            ))}
        </Switch>
    );
}

const mapStateToProps = state => ({
    routing: state.routing,
});

const mapDispatchToProps = dispatch => ({
    getRouting: () => dispatch(getRouting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);