import React from 'react';
import { withRouter } from 'react-router-dom';

import MenuItems from '../../constants/MenuItems';

const Menu = ({ classes, history }) => (
    <nav className={classes.Menu}>
        <ul className={classes.Inner}>
            {MenuItems.map((menuItem,key) => (
                <li className={classes.ListItem} onClick={() => history.push(menuItem.uri)} key={key}>{menuItem.label}</li>
            ))}
        </ul>
    </nav>
);

export default withRouter(Menu);