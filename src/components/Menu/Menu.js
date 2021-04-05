import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getNavigation } from '../../redux/actions/navigation';

const Menu = ({ classes, history, navigation, getNavigation }) => {

    React.useEffect(() => {
        getNavigation();
        // eslint-disable-next-line
    }, []);

    return (
        <nav className={classes.Menu}>
            <ul className={classes.Inner}>
                {navigation && navigation.navigation && navigation.navigation.length && navigation.navigation.map((item, key) => (
                    <li className={classes.ListItem} onClick={() => history.push(item.uri)} key={key}>{item.label}</li>
                ))}
            </ul>
        </nav>
    );
}

const mapStateToProps = state => ({
    navigation: state.navigation,
});

const mapDispatchToProps = dispatch => ({
    getNavigation: () => dispatch(getNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));