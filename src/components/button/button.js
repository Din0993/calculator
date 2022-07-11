import React from "react";
import { ButtonCalc } from "./button.style";
const Button = (props) => {
  const btnSign = props.sign;
  return (
    <ButtonCalc
      isEqual={props.sign}
      onClick={(event) => props.btnClick(btnSign)}
    >
      {props.sign}
    </ButtonCalc>
  );
};

export default Button;
