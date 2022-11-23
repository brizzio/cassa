/**
 * NOTE: This demo aims to explain the basic behavior
 * You'll likely need to adapt it for your needs
 * Here's another example, in case you need it:
 * https://codesandbox.io/s/github/simple-keyboard/multiple-inputs-wrapper-router/tree/master/?file=/src/Home.js
 */
import React, { useRef, useState } from "react";
import styled from "styled-components";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../../index.css";

const InputStyled = styled.input`
  border:solid thin;
  border-radius:15px;
  background-color:white;
  
  font-size:1.5em;
  color:lightslategray;
`

export default function Kb(props) {

   const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const placeholder = props.placeholder || "..."

  const onChange = input => {
    setInput(input);
    console.log("Input changed", input);
    if (props.onChange) {
        props.onChange(input);
    }
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div className="App">

      <InputStyled
          value={input}
          placeholder={placeholder}
          onChange={onChangeInput}
      />
      
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}