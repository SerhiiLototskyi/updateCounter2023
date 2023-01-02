import React, {useState} from 'react';
import s from './App.module.css';
import {CounterButton} from "./counterButton/counterButton";


function App() {
    let [value, setValue] = useState<number>(0)

    return (
        <div className={s.app}>
            <div className={s.counterContainer}>
                <div className={s.valueContainer}>
                    <div className={value === 5 ? s.disabledValue : s.value }>{value}</div>
                </div>
                <div className={s.buttonsContainer}>
                        <CounterButton name={"inc"}
                                       onClickHandler={() => {setValue(value+1)}}
                                       // value={value}
                                        disabled={value === 5}
                                       disabledValue={5}/>
                        <CounterButton name={"reset"}
                                       onClickHandler={() => {setValue(0)}}
                                       disabled={value === 0}
                                       disabledValue={0}/>
                </div>
            </div>
        </div>
    );
}

export default App;
