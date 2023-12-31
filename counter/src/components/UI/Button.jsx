import React from 'react';
import classNames from 'classnames';
import classes from './Button.module.css'


const Button = (props) => {
    return (
        <button className={classNames(classes.buttonClick, props.className)} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;