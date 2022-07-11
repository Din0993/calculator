import styled from "styled-components";

export const ButtonCalc = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isEqual === "=" ? "#de6312" : "#6a1dcf"};
  color: white;
  font-size: 20px;
  border-radius: 7px;
  width: ${(props) => (props.isEqual === "=" ? "110px" : "50px")};
  height: 50px;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 5px;
  transition: all 0.4s ease;
  &:hover {
    background-color: ${(props) =>
      props.isEqual === "=" ? "#bd5611" : "#4a0e99"};
  }
`;
