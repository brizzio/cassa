import React from "react";
import styled from "styled-components";

const NewCartStyledButton = ({ type = 'button', onClick, bgColor, children }) => {
  
    const ButtonStyled = styled.button`
      margin:0;
      height:100%;
      width:100%;
      background: ${bgColor};
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
     
    return (
      <ButtonStyled type={type} onClick={onClick}>
        <span className="title">{children}</span>
      </ButtonStyled>
    );
  };

  export default NewCartStyledButton;