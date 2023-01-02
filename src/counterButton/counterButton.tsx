import React from 'react';
import s from "../App.module.css";

type CounterButtonPropsType ={
    // value: number
    name: string
    disabled?: boolean
    disabledValue: number
    onClickHandler: () => void
    className?:string
}

export const CounterButton = (props:CounterButtonPropsType) => {
    return (
        <div>
            <button className={props.className || s.button} disabled={props.disabled } onClick={props.onClickHandler}>{props.name}</button>
        </div>
    );
};

