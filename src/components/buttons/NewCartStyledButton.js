import React from "react";
import styled from "styled-components";


const ButtonStyled = styled.button`
      margin:0;
      height:100%;
      width:100%;
      background: ${props => props.bg };
      font-size: 20px;
      line-height: 18px;
      /* identical to box height, or 117% */
      border:none;    
      letter-spacing: -0.032em;
      text-transform: uppercase;
  
      .title {
        display:block;
        text-align:center;
      }
      
  
      color: #FFFFFF;
    `
const NewCartStyledButton = ({ type = 'button', onClick, bgColor, children }) => {
  
    
     
    return (
      <ButtonStyled type={type} onClick={onClick} bg={bgColor}>
        <span className="title">{children}</span>
      </ButtonStyled>
    );
  };

  export default NewCartStyledButton;