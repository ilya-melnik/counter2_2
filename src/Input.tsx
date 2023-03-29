import React, {ChangeEvent, FC} from 'react';
import styled from "styled-components";

type InputType ={
    name: string
    callBack: (value: number)=> void
}
const Input: FC<InputType> = ({name,callBack}) => {
    const getValue = (e:ChangeEvent<HTMLInputElement>) => {
        callBack(+e.currentTarget.value)
    }

    return (
        <InputWrapper>
            {name } <input onChange={getValue} type={"number"}/>
        </InputWrapper>
    );
};
export default Input;

const InputWrapper = styled.div`
  display: flex;
  

`
