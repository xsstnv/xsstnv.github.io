import React from 'react';
import { withRouter } from 'react-router';

import classes from './MobileMenu.module.css';
import Trigger from '../Trigger/Trigger';
import Menu from '../Menu/Menu';

const MobileMenu = () => {

    const [visible, setVisible] = React.useState(false);

    const click = () => setVisible(!visible);

    return (
        <React.Fragment>
            {visible && <Menu classes={classes} />}
            <Trigger click={click} />
        </React.Fragment>
    );
}

export default withRouter(MobileMenu);