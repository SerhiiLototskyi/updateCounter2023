import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./counter/Counter";
import {CounterSettings} from "./counterSettcings/CounterSettings";


function App() {
    //статус режима редактирования, для обработки disble кнопки set и вывода сообщения в правом блоке
    let [onChangingValuesStatus, setOnChangingValuesStatus] = useState(false)
    // статус ошибки для, для обработки disble всех кнопок и вывода сообщения ошибки
    let [error, setError] = useState(false)
    //стейт максимального значения
    let [maxValue, setMaxValue] = useState<number>(5)
    //стейт стартового значения
    let [startValue, setStartValue] = useState<number>(0)
    // стейт значения счетчика
    let [value, setValue] = useState<number>(0)
    // колбэк для фиксации значений при нажатии кнопки set или изменения статуса редактирования на false
    const setSettings = (maxInputValue: number, startInputValue: number) => {
        setValue(startInputValue)
        setStartValue(startInputValue)
        setMaxValue(maxInputValue)
    }
    return (
        <div className={s.app}>
            <div className={s.components}>
                <CounterSettings setError={setError}
                                 onChangingValuesStatus={onChangingValuesStatus}
                                 setOnChangingValuesStatus={setOnChangingValuesStatus} setSettings={setSettings}
                                 setMaxValue={setMaxValue}
                                 error={error}/>
                <Counter error={error}
                         onChangingValuesStatus={onChangingValuesStatus}
                         maxValue={maxValue}
                         startValue={startValue}
                         value={value}
                         setValue={setValue}/>
            </div>
        </div>
    );
}

export default App;
