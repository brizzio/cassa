import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
    min-height:100%;
    align-items:center;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right:10px;
    background-color: #80ABEB; 
    color:white;

`
const MessageStyled = styled.div`
    display:flex;
    flex-direction:row;
    height: 100%;
    color:white;
    gap:5px;
    margin-left:10px;
`

function FooterStyled() {
  return (
    <Wrapper>
        <MessageStyled>
            <div>spinner</div>
            <div>message</div>
        </MessageStyled>
        <div>
          Copyrights
        </div>
    </Wrapper>
  )
}

export default FooterStyled