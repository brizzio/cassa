import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Logo} from './icons/bizerba-logo.svg'
import Session from './Session'


const Wrapper = styled.div`
    min-height:100%;
    min-width:98%;
    align-items:center;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right:5px;
    background-color: #80ABEB; 
    color:white;

`
const MessageStyled = styled.div`
    display:flex;
    flex-direction:row;
    height: 100%;
    color:white;
    gap:10px;
    margin-left:10px;
`



function FooterStyled() {
  return (
    <Wrapper>
        <MessageStyled>
            <div><i className="fa fa-spinner fa-spin"></i></div>
            <div>Scannerizzando prodotti...</div>
            <Session />
        </MessageStyled>
        <div style={{
          display:"flex",
          flexDirection:"row",
          alignItems:"flex-end",
          width: "8%"
          
        }}>

          <Logo fill="black" style={{
            scale:"0.7",
            
          }}/>
         
        </div>
    </Wrapper>
  )
}

export default FooterStyled