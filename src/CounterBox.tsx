import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {inspect} from "util";


type CounterBoxType = {
    num?: number
    minValue?: ReactNode
    maxValue?: ReactNode
    btn?: ReactNode
    btn_inc?: ReactNode
    btn_rest?: ReactNode
    // callBack: ()=> void
}

const CounterBox: FC<CounterBoxType> = ({num, minValue, maxValue, btn, btn_inc, btn_rest}) => {
    return (
        <Wrapper>
            <Screen_Wrapper>
                <Number maxValue={maxValue} num={num??0}>{num}</Number>
                // что мне передать чтобы в stuled component сделать вычисление чтобы задать стиль кнопки.
                {minValue}
                {maxValue}
            </Screen_Wrapper>
            <Btn_Wrapper>
                {btn}
                {btn_inc}
                {btn_rest}
            </Btn_Wrapper>
        </Wrapper>
    );
};

export default CounterBox;

type NumberType = {
    num?: number
    maxValue: number
}
const Number = styled.div<NumberType>`
  color: ${({num, maxValue}) => maxValue >= num ? "#61dafb;" : 'red'};
  font-size: 113px;
`

const Wrapper = styled.div`
  margin: 30px auto;
  width: 550px;
  height: 410px;
  border: 3px solid #61dafb;
  border-radius: 9px;
`
const Screen_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 7px auto;
  width: 530px;
  height: 230px;
  border: 3px solid #61dafb;
  border-radius: 9px;
`
const Btn_Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
  width: 520px;
  height: 145px;
  border: 3px solid #61dafb;
  border-radius: 9px;
`

