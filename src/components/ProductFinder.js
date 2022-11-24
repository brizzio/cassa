import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useStore } from '../context/Store';

import Modal from 'react-bootstrap/Modal';
import ScrollBarButton from './ScrollBarButton/ScrollBarButton';
import styled from 'styled-components';

import Kb from './keyboard/Kb';



export default function ProductFinder() {

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false); setQuery("")}
  const handleShow = () => setShow(true);

  const [query, setQuery] = useState("")


  const DisplayWrapper = styled.div`
  
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: center;
    min-height:400px;
    max-height:400px;
    overflow-y:scroll;
    gap:20px;
    margin-bottom:20px;

    .product {
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      margin:5px;
      padding:5px;
      min-height:200px;
      width:150px;
      border:none;
      background-color: #f9f9f9;

      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      border-radius: 5px; 
    }

    h6{
      text-align:center;
      margin-top:5px;
    }

    h3{
      text-align:center;
      
    }

    button {
      margin:0;
      padding:0;
      background-color:transparent !important;
      border:none;
    }

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 37px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    border-radius: 15px;
    border: 6px solid #ffffff;
  }
    
  `

    /* const data = new Array(30).fill().map(
    (value, index) => (
    { id: index, title: `prodotto ${index}`, UPC: Math.random()*10000 }
    )
    ) */

    const store = useStore()
    
    const handleClick = (e) =>{
      
      console.log('handle click function')
      console.log('item add function')
      console.log(e)
      store.addItemToCart(e)
      handleClose()
    }

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

          <DisplayWrapper>

          
            {store.products.filter(post => {
                if (query === '') {
                return post;
                } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                return post;
                }
            }).map(((item) => (
              <button onClick={()=>handleClick(item)}>
                <div key={item.id} className="product">
                    <img src={item.images[0]} alt={item.title} style={{height:"80px"}}></img>
                    <h6>{item.title}</h6>
                    <h3>$ {item.price}</h3>
                </div>
              </button>
                
            )))}
       
          
          </DisplayWrapper>  
          <Kb 
          placeholder="scrivi il prodotto che stai cercando..."
          onChange={(data)=>setQuery(data)}
          />
          
          
         
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
