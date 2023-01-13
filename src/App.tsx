import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./counter/Counter";
import {CounterSettings} from "./counterSettcings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    incrementCounterValueAC,
    resetCounterValueAC,
    setCounterErrorAC,
    setCounterSettingsAC
} from "./state/reducers/counterReducer";

/*
    let [firstRendering,setFirstRendering] = useState(true)
    useEffect(() => {
        let maxValue = localStorage.getItem('maxValue')
        let startValue = localStorage.getItem('startValue')
        let value = localStorage.getItem('value')
        if (value && maxValue && startValue) {
            setSettings(JSON.parse(maxValue),JSON.parse(startValue),JSON.parse(value))
        }
        setFirstRendering(false)
    }, [])

    useEffect(() => {
        if(!firstRendering){
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
            localStorage.setItem('startValue', JSON.stringify(startValue))
            localStorage.setItem('value', JSON.stringify(value))
        }
    }, [maxValue, startValue, value])
*/


function App() {
    //статус режима редактирования, для обработки disble кнопки set и вывода сообщения в правом блоке
    let [onChangingValuesStatus, setOnChangingValuesStatus] = useState(false)
    // статус ошибки для, для обработки disble всех кнопок и вывода сообщения ошибки
 //   let [error, setError] = useState(false)
    //стейт максимального значения
    let [maxValue, setMaxValue] = useState<number>(5)
    //стейт стартового значения
     let [startValue, setStartValue] = useState<number>(0)
    // стейт значения счетчика
    // let [value, setValue] = useState<number>(0)
    const dispatch = useDispatch();

    const valueRedux = useSelector<AppRootStateType, number>(state => state.counter.counterValue)
    const startValueRedux = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValueRedux = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const errorRedux = useSelector<AppRootStateType, boolean>(state => state.counter.error)

    const setValueRedux = () => {
        dispatch(incrementCounterValueAC())
    }
    const setErrorRedux = (statusError: boolean) => {
        dispatch(setCounterErrorAC(statusError))
    }
    const resetValueRedux = () => {
        dispatch(resetCounterValueAC(startValueRedux))
    }
    // колбэк для фиксации значений при нажатии кнопки set или изменения статуса редактирования на false
    const setSettings = (maxInputValue: number, startInputValue: number) => {
        dispatch(setCounterSettingsAC(maxInputValue, startInputValue))
    }

    return (
        <div className={s.app}>
            <div className={s.components}>
                <CounterSettings setError={setErrorRedux}
                                 onChangingValuesStatus={onChangingValuesStatus}
                                 setOnChangingValuesStatus={setOnChangingValuesStatus}
                                 setSettings={setSettings}
                                 setMaxValue={setMaxValue}
                                 maxValue={maxValue}
                                 startValue={startValue}
                                 error={errorRedux}
                                 setStartValue={setStartValue}/>
                <Counter error={errorRedux}
                         onChangingValuesStatus={onChangingValuesStatus}
                         maxValue={maxValueRedux}
                         startValue={startValue}
                         value={valueRedux}
                         setValue={setValueRedux}
                         resetValueRedux={resetValueRedux}
                />
            </div>
        </div>
    );
}

export default App;
