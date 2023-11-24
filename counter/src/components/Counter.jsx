import React, { useState } from 'react';
import classes from './styles/Counter.module.css'
import Button from './UI/Button';
import classNames from 'classnames';

const Counter = () => {

    const [count, setCount] = useState(0);

    const minusClick = () => setCount(count - 1);
    const plusClick = () => setCount(count + 1);

    return (
        <div className={classes.Counter}>
            <h2 className={classes.heading}>Счетчик: </h2>
            <h1 className={classes.count}>{count}</h1>
            <div className={classes.buttons}>
                <Button className={classNames(classes.buttonClick, classes.minusClick)} onClick={minusClick}>- Минус</Button>
                <Button className={classNames(classes.buttonClick, classes.plusClick)} onClick={plusClick}>Плюс +</Button>
            </div>
        </div>
    );
};

export default Counter;