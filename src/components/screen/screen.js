import React from "react";
import { ScreenContainer, ScreenMemory } from "./screen.style";
const Screen = (props) => {
  let numberForScreen = 0;
  let textForMemory = "";
  if (props.dataForScreen[2] === "") {
    if (props.dataForScreen[0] !== "") {
      numberForScreen = props.dataForScreen[0];
    }
  } else if (props.dataForScreen[2] !== "") {
    if (props.dataForScreen[1] !== "") {
      numberForScreen = props.dataForScreen[1];
    } else {
      numberForScreen = 0;
    }
  }

  if (props.dataForScreen[3]) {
    numberForScreen = props.dataForScreen[3];
  }

  if (props.dataForScreen[2]) {
    textForMemory += props.dataForScreen[0];
    textForMemory += ` ${props.dataForScreen[2]}`;
  }
  if (props.dataForScreen[3]) {
    textForMemory += ` ${props.dataForScreen[1]}`;
  }

  return (
    <React.Fragment>
      <ScreenMemory>{textForMemory}</ScreenMemory>
      <ScreenContainer>{numberForScreen}</ScreenContainer>
    </React.Fragment>
  );
};

export default Screen;
