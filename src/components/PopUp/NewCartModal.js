import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../../index.css";
import NewCartStyledButton from '../buttons/NewCartStyledButton';

//import { useStore } from '../../context/Store';


export default function NewCartModal(props) {

  //const store = useStore()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  
  
  return (
    <>
      <NewCartStyledButton onClick={handleShow} bgColor={'#6966FF'} >Nuovo Cliente</NewCartStyledButton>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Nuovo Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <KeyboardComponent 
            cancel={handleClose} 
           />
        </Modal.Body>
        
      </Modal>
    </>
  );

}





const KeyboardComponent = (props)=>{
 
    const [inputs, setInputs] = useState({});
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");
    const keyboard = useRef();

    const handleSubmit = ()=>{
      console.log('submitted data')
      console.log(inputs)
      //store.open(inputs)
      
    }
  
  
    const onChangeAll = inputs => {
      /**
       * Here we spread the inputs into a new object
       * If we modify the same object, react will not trigger a re-render
       */
      setInputs({ ...inputs });
      console.log("Inputs changed", inputs);
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
      const inputVal = event.target.value;
  
      setInputs({
        ...inputs,
        [inputName]: inputVal
      });
  
      keyboard.current.setInput(inputVal);
    };
  
    const getInputValue = inputName => {
      return inputs[inputName] || "";
    };
  
    return (
      <div className="form">
        <input
          id="taxCode"
          value={getInputValue("taxCode")}
          onFocus={() => setInputName("taxCode")}
          placeholder={"Codice Fiscale"}
          onChange={onChangeInput}
        />
        <input
          id="lotteryCode"
          value={getInputValue("lotteryCode")}
          onFocus={() => setInputName("lotteryCode")}
          placeholder={"Inserire il codice della Lotteria degli Scontrini"}
          onChange={onChangeInput}
        />
        <input
          id="loyaltyCode"
          value={getInputValue("loyaltyCode")}
          onFocus={() => setInputName("loyaltyCode")}
          placeholder={"Codice di registro nel programma di fedeltá"}
          onChange={onChangeInput}
        />
        <input
          id="firstName"
          value={getInputValue("firstName")}
          onFocus={() => setInputName("firstName")}
          placeholder={"Nome"}
          onChange={onChangeInput}
        />
        <input
          id="lastName"
          value={getInputValue("lastName")}
          onFocus={() => setInputName("lastName")}
          placeholder={"Cognome"}
          onChange={onChangeInput}
        />
        <input
          id="address"
          value={getInputValue("address")}
          onFocus={() => setInputName("address")}
          placeholder={"Indirizzo"}
          onChange={onChangeInput}
        />
        <input
          id="email"
          value={getInputValue("email")}
          onFocus={() => setInputName("email")}
          placeholder={"Email"}
          onChange={onChangeInput}
        />
        <input
          id="mobile"
          value={getInputValue("mobile")}
          onFocus={() => setInputName("mobile")}
          placeholder={"Mobile"}
          onChange={onChangeInput}
        />
        <input
          id="phone"
          value={getInputValue("phone")}
          onFocus={() => setInputName("phone")}
          placeholder={"Telefono"}
          onChange={onChangeInput}
        />
        <div>
          <button onClick={handleSubmit}>CONTINUA</button>
          <button onClick={props.cancel}>CANCELLA</button>
        </div>
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          inputName={inputName}
          layoutName={layoutName}
          onChangeAll={onChangeAll}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  }
