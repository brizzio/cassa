import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../LoginComponent/Login';
import KbWithForm from '../keyboard/KbWithForm';

import { useAuth, useAuthUpdate } from "../../context/AuthContext";

// User Login info
const database = [
  {
    username: "user1",
    password: "pass1",
    employee_code:2314
  },
  {
    username: "user2",
    password: "pass2",
    employee_code:2222
  }
];

const errors = {
  uname: "utente invalido",
  pass: "password invalida"
};



export default function LoginModal() {

  const auth = useAuth()

  console.log(auth)

  const access = useAuthUpdate()
  
  
  console.log(auth)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [errorMessages, setErrorMessages] = useState({});

  const verifyAuth = ({ uname, pass }) => {
  

    // Find user login info
    const userData = database.find((user) => user.username === uname);
    console.log('verifyAuth inputs ', uname, pass)
    //Form Message errors
    const errors = {
      uname: "utente invalido",
      pass: "password invalida"
    };

    // Compare user info
    if (userData) {
      if (userData.password !== pass) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        return (false)
      } else {
          
        access.login({uname:userData.username, employee_code:userData.employee_code})
        return (true)
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      return(false)
    }
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        login
      </Button>

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
          <Modal.Title>Modal Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <KbWithForm 
            userExist={auth}
            verifyAuth={verifyAuth}
            errors={errorMessages}
          />
          {/* <Login closeOnSubmit={handleClose}/> */}
        </Modal.Body>
        
      </Modal>
    </>
  );
}
