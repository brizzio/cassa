/**
 * NOTE: This demo aims to explain the basic behavior
 * You'll likely need to adapt it for your needs
 * Here's another example, in case you need it:
 * https://codesandbox.io/s/github/simple-keyboard/multiple-inputs-wrapper-router/tree/master/?file=/src/Home.js
 * to install npm i react-simple-keyboard --save
 */
import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../../index.css";

export default function KbWithForm(props) {
    console.log('props')
console.log(props)

  const [inputs, setInputs] = useState({});
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");
  const keyboard = useRef();

  const authenticated = props.userExist
  console.log('form auth ', authenticated)
  // Form States
 
  const [isSubmitted, setIsSubmitted] = useState(authenticated);
  
  

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    
    name === props.errors.name && (
      <div className="error">{props.errors.message}</div>
    );

  const onChangeAll = inputs => {
    /**
     * Here we spread the inputs into a new object
     * If we modify the same object, react will not trigger a re-render
     */
    setInputs({ ...inputs });
    console.log("Inputs changed", inputs);

    if (props.onChange) {
        props.onChange(inputs);
      }
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const inputVal = event.target.value.trim();

    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    keyboard.current.setInput(inputVal);
  };

  const getInputValue = inputName => {
    return inputs[inputName] || "";
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log('handle submit inputs ', inputs)
    props.verifyAuth(inputs)?setIsSubmitted(true):setIsSubmitted(false)

    
  };

   // JSX code for login form
   const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Utente </label>
          <input
            id="uname"
            type="text"
            value={getInputValue("uname")}
            onFocus={() => setInputName("uname")}
            placeholder={"Nome Utente"}
            onChange={onChangeInput}
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            id="pass"
            value={getInputValue("pass")}
            onFocus={() => setInputName("pass")}
            placeholder={"Inserire la Password"}
            onChange={onChangeInput}
            required
        />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );

 console.log('isSubmitted..',isSubmitted)
  return (
    <div className="App">
      <div className="login-form">
        <div className="title">Accesso al Cassa</div>
        {isSubmitted ? <div>L'utente ha effettuato correttamente l'accesso</div> : renderForm}
      </div>
      {!isSubmitted &&
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        inputName={inputName}
        layoutName={layoutName}
        onChangeAll={onChangeAll}
        onKeyPress={onKeyPress}
      />}
    </div>
  );
}