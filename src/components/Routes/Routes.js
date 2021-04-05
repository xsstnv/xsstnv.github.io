import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getMapping } from '../../redux/actions/mapping';
import MarkdownReader from '../MarkdownReader/MarkdownReader';
import { config } from '../../config';

const Routes = props => {

    React.useEffect(() => {
        props.getMapping();
        // eslint-disable-next-line
    }, []);

    return (
        <Switch>
            { props.mapping && props.mapping.mapping && props.mapping.mapping.length && props.mapping.mapping.map((item, key) => (
                <Route key={key} exact path={item.url}>
                    <MarkdownReader path={config[process.env.REACT_APP_ENV].pagesPath + item.path} />
                </Route>
            ))}
        </Switch>
    );
}

const mapStateToProps = state => ({
    mapping: state.mapping,
});

const mapDispatchToProps = dispatch => ({
    getMapping: () => dispatch(getMapping()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);