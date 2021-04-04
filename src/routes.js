import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getMapping } from './redux/actions/mapping';
import Markdown from './pages/Markdown';
import Result from './components/Result/Result';


const MappedRoutes = props => {

    React.useEffect(() => {

        props.getMapping();

        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            { props.mapping && props.mapping.mapping && props.mapping.mapping.length && props.mapping.mapping.map((item, key) => (
                <Route key={key} exact path={item.url}>
                    <Markdown path={process.env.REACT_APP_PAGES + item.path} />
                </Route>
            ))
            }

        </React.Fragment>
    )
}


const mapStateToProps = state => ({
    mapping: state.mapping,
});

const mapDispatchToProps = dispatch => ({
    getMapping: () => dispatch(getMapping()),
});

const ConnectedMappedRoutes = connect(mapStateToProps, mapDispatchToProps)(MappedRoutes);

export const routes = (
    <Switch>
        <ConnectedMappedRoutes />
        <Route exact path="/:any" render={() => <Result status="404" />} />
    </Switch>
);