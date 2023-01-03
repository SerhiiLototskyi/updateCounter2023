import React from 'react';
import s from "./Counter.module.css";
import {CounterButton} from "../counterButton/counterButton";

export type CounterPropsType = {
    error: boolean
    value: number
    maxValue: number
    startValue: number
    setValue: (newValue: number) => void
    onChangingValuesStatus: boolean
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={s.counterContainer}>
            {/*отрисовка елемента, в зависимости от наличия ошибки или статуса редактирования*/}
            {props.error ? <div className={s.errorMessage}>Incorrect value!</div> : props.onChangingValuesStatus ?
                <div className={s.onChangingValues}>enter values and press 'set' </div> :
                <div className={props.value === props.maxValue ? s.disabledValue : s.value}>{props.value}</div>}

            <div className={s.buttonsContainer}>
                <CounterButton title={"inc"}
                               onClickHandler={() => {
                                   props.setValue(props.value + 1)
                               }}
                               disabled={props.onChangingValuesStatus ? true : props.value === props.maxValue}
                />
                <CounterButton title={"reset"}
                               onClickHandler={() => {
                                   props.setValue(props.startValue)
                               }}
                               disabled={props.onChangingValuesStatus ? true : props.value === props.startValue}
                />
            </div>
        </div>
    );
};

