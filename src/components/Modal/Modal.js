import React from "react";
import styled from "styled-components"
import { useModalUpdate } from "../../context/ModalContext";


const ModalBackground = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

` 

const ModalContainer = styled.div`

  width: 80%;
  height: 80%;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;

  .title {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  }

  .body {
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
  }

  .footer {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    #cancelBtn {
      background-color: crimson;
    }
  }

  .footer button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }

` 
const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
  }

`



function Modal() {

  const tgg = useModalUpdate();

  return (
    <ModalBackground >
      <ModalContainer >
        <Header className="titleCloseBtn">
          <button
            onClick={tgg}
          >
            X
          </button>
        </Header>
        <div className="title">
          <h1>Sei sicuro di voler continuare?</h1>
        </div>
        <div className="body">
          <p>La prossima pagina é splendida. Speriamo che ci vuoi andare!</p>
        </div>
        <div className="footer">
          <button
            onClick={tgg}
            id="cancelBtn"
          >
            Cancella
          </button>
          <button>Continua</button>
        </div>
      </ModalContainer>
    </ModalBackground >
  );
}

export default Modal;