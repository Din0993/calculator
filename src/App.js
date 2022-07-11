import React, { useState } from "react";
import Button from "./components/button/button";
import Screen from "./components/screen/screen";
import { Box, CalcContainerBox } from "./App.style";
const calcButtonSigns = [
  "C",
  "+-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

function App() {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  const [isOperation, setIsOperation] = useState(false);
  const handleBtnClick = (num) => {
    if (
      num === "%" ||
      num === "/" ||
      num === "X" ||
      num === "+" ||
      num === "-"
    ) {
      setIsOperation(true);
      setOperation(num);
    }

    if ((Number(num) || num === ".") && !isOperation) {
      setNumber(number + num);
    } else if ((Number(num) || num === ".") && isOperation) {
      setNumber2(number2 + num);
    }

    if (num === "C") {
      setNumber("");
      setNumber2("");
      setResult(0);
      setOperation("");
      setIsOperation(false);
    }

    if (num === "+-") {
      if (number !== "") {
        setNumber(number * -1);
      }
      if (result !== 0) {
        setResult(result * -1);
      }
    }

    if (num === "=") {
      const num1 = Number(number);
      const num2 = Number(number2);

      if (operation === "%") {
        setResult(num1 % num2);
        setNumber(num1 % num2);
        setNumber2("");
      } else if (operation === "/") {
        setResult(num1 / num2);
        setNumber(num1 / num2);
        setNumber2("");
      } else if (operation === "X") {
        setResult(num1 * num2);
        setNumber(num1 * num2);
        setNumber2("");
      } else if (operation === "-") {
        setResult(num1 - num2);
        setNumber(num1 - num2);
        setNumber2("");
      } else if (operation === "+") {
        setResult(num1 + num2);
        setNumber(num1 + num2);
        setNumber2("");
      }
    }
  };
  return (
    <React.Fragment>
      <CalcContainerBox>
        <Screen dataForScreen={[number, number2, operation, result]} />
        <Box>
          {calcButtonSigns.map((sign, i) => (
            <Button key={i} sign={sign} btnClick={handleBtnClick} />
          ))}
        </Box>
      </CalcContainerBox>
    </React.Fragment>
  );
}

export default App;
