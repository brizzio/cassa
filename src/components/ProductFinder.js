import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import ScrollBarButton from './ScrollBarButton/ScrollBarButton';
import styled from 'styled-components';

import Kb from './keyboard/Kb';



export default function ProductFinder() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [query, setQuery] = useState("")


  const FormWrapper = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height:400px;
    max-height:400px;
    overflow:hidden;
    
  `

    const data = new Array(30).fill().map(
    (value, index) => (
    { id: index, title: `prodotto ${index}`, UPC: Math.random()*10000 }
    )
    )
  

  return (
    <>
      <ScrollBarButton 
        text="PRODOTTI"
        icon="fa-solid fa-magnifying-glass" //fa-arrow-right-to-bracket
        color=""
        onClick={handleShow}>
      </ScrollBarButton>

      <Modal 
        show={show} 
        onHide={handleClose}
        dialogClassName="modal90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Listino Prezzi</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <FormWrapper>

          <div>
            {data.filter(post => {
                if (query === '') {
                return post;
                } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                return post;
                }
            }).map(((item) => (
                <div key={item.id} className="post">
                    <span>{item.title} - {item.UPC}</span>
                </div>
            )))}
        </div>
          
          </FormWrapper>  
          <Kb onChange={(data)=>setQuery(data)}/>
          
          
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
