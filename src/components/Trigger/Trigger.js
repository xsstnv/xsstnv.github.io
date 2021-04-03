import React from 'react';
import classes from './Trigger.module.css';

const Trigger = props => (
    <span class={classes.Trigger} onClick={props.click}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#333" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
    </span>
);

export default Trigger;