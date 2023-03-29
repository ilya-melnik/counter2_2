import React, {FC} from 'react';
import styled from "styled-components";

type ButtonType = {
    name: string
    callBack?: ()=> void
}
const Button: FC<ButtonType> = ({name, callBack}) => {
    return (
        <Btn onClick={callBack}>
            {name}
        </Btn>
    );
};

export default Button;

const Btn = styled.button`
  background-color: #61dafb;
  color: #282c34;
  font-size: 30px;
  border-radius: 10px;
  width: 160px;
  height: 90px;
`
