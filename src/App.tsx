import React, {ChangeEvent, ChangeEventHandler, FC, useState} from 'react';

import './App.css';
import styled from "styled-components";
import CounterBox from "./CounterBox";
import Input from "./Input";
import Button from "./Button";


function App() {
    let [num, setNum] = useState(0)
    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)

    const functionInc = () => {
        if( num >= minValue && num < maxValue ){    // нужно =<
            setNum(num => num + 1)
        }
        if (num >= maxValue ){

        }
    }
    const functionRest = () => {
        setNum(0)
    }

const changeMinValue = (value: number) => {
    setMinValue(value)

}
const changeMaxValue = (value: number) => {
    setMaxValue(value)
}

const setValue = () => {
    setNum(minValue)
}

    return (
        <Div className="App">
            <CounterBox
                num={num}
                btn_inc={<Button
                    name={'inc'} callBack={functionInc}/>}
                btn_rest={<Button name={'rest'} callBack={functionRest}/>}
            ></CounterBox>

            <CounterBox
                minValue={<Input name={'minValue'} callBack={changeMinValue} />} maxValue={<Input name={'maxValue'} callBack={changeMaxValue}/>}
                btn={<Button name={'set'} callBack={setValue}/>}></CounterBox>
        </Div>
    );
}

export default App;
const Div = styled.div`
  display: flex;

`




