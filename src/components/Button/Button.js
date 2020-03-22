import classes from "./Button.module.css"
import React from 'react';

const button = (props) => {
    return (
        <button className={classes.Button} onClick={props.clicked}>{props.children}</button>
    );
}

export default button;