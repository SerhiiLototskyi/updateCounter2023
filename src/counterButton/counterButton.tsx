import React from 'react';
import s from "../counter/Counter.module.css";

type CounterButtonPropsType ={
    title: string
    disabled?: boolean
    onClickHandler: () => void
    className?:string
}

export const CounterButton = (props:CounterButtonPropsType) => {
    return (
        <div>
            <button className={props.className || s.button} disabled={props.disabled } onClick={props.onClickHandler}>{props.title}</button>
        </div>
    );
};

