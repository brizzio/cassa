import React from 'react'
import styled from 'styled-components'
import ScrollButton from './ScrollBarButton/ScrollBarButton'

const Wrapper = styled.div`

  display:flex;
  flex-direction:column;
  gap:1rem;

`
const BtnDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:95%;
  height: 175px;
  

`

function RightSideScrollBarStyled() {
  return (
    <Wrapper>
      <BtnDiv>
      <ScrollButton
          text="NAM"
          icon="fa-solid fa-caret-right" //fa-arrow-right-to-bracket
          color=""
        />
      </BtnDiv>
      <BtnDiv>
      <ScrollButton
          text="NAM"
          icon="fa-solid fa-caret-right" //fa-arrow-right-to-bracket
          color=""
        />
      </BtnDiv>
      <BtnDiv>
      <ScrollButton
          text="NAM"
          icon="fa-solid fa-caret-right" //fa-arrow-right-to-bracket
          color=""
        />
      </BtnDiv>
      <BtnDiv>
      <ScrollButton
          text="NAM"
          icon="fa-solid fa-caret-right" //fa-arrow-right-to-bracket
          color=""
        />
      </BtnDiv>
      <BtnDiv>
      <ScrollButton
          text="NAM"
          icon="fa-solid fa-caret-right" //fa-arrow-right-to-bracket
          color=""
        />
      </BtnDiv>

    </Wrapper>
    
  )
}

export default RightSideScrollBarStyled