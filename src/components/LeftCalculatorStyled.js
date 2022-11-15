import React, { useState } from 'react'
import styled from 'styled-components'
import SideButton from './SideButton/SideButton'
import ArrowUpSVG from './icons/ArrowUpSVG'
import Erase from './icons/EraseSVG'
import Bag from './icons/BagSVG'
import DarkThemeButton from './utils/DarkThemeButton'
import ModalButton from './utils/ModalButton'


let Grid = styled.div`
  grid-column:1;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 100%;
  gap: 0%;
  border-style:solid;
  border-color:yellowgreen;
  min-height:100%;
 

` 


let SideBarContainer = styled.div`

    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    padding:4%;
    
`

let ButtonContainer = styled.div`

    height:18%;
    width:100%;
    align-items: center;
    
`


let KeyboardGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(5 , 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0%;
  border:none;
  //border-style:solid;
  //border-color:burlywood;
  min-height:92%;
  margin-top:0.5%;
  margin-bottom:0.5%;
  
 

` 
let KeyUp = styled.div`

  grid-column: 1;
  grid-row: 1;
  //border-style:solid;
  display: flex;
  justify-content:center;
  
`
let KeyDown = styled.div`

  grid-column: 1;
  grid-row: 2;
  //border-style:solid;
  
`
let KeyNone = styled.div`

  grid-column: 1;
  grid-row: 3 / 5;
  //border-style:solid;
  
`

let KeyZero = styled.div`

  grid-column: 2 / 4;
  grid-row: 4;
  //border-style:solid;
  
`
let KeyDot = styled.div`

  grid-column: 4;
  grid-row: 4;
  //border-style:solid;
  
`
let KeyOne = styled.div`

  grid-column: 2;
  grid-row: 3;
  //border-style:solid;
  
`
let KeyTwo = styled.div`

  grid-column: 3;
  grid-row: 3;
  //border-style:solid;
  
`
let KeyThree = styled.div`

  grid-column: 4;
  grid-row: 3;
  //border-style:solid;
  
`
let KeyFour = styled.div`

  grid-column: 2;
  grid-row: 2;
  //border-style:solid;
  
`
let KeyFive = styled.div`

  grid-column: 3;
  grid-row: 2;
  //border-style:solid;
  
`
let KeySix = styled.div`

  grid-column: 4;
  grid-row: 2;
  //border-style:solid;
  
`
let KeySeven = styled.div`

  grid-column: 2;
  grid-row: 1;
  //border-style:solid;
  
`
let KeyEight = styled.div`

  grid-column: 3;
  grid-row: 1;
  //border-style:solid;
  
`
let KeyNine = styled.div`

  grid-column: 4;
  grid-row: 1;
  //border-style:solid;
  
`
let KeyPercent = styled.div`

  grid-column: 5;
  grid-row: 1;
  //border-style:solid;
  
`
let KeyBack = styled.div`

  grid-column: 5;
  grid-row: 2;
  //border-style:solid;
  
`
let KeyEnter = styled.div`

  grid-column: 5;
  grid-row: 3 / 5;
  //border-style:solid;
   
  
  
`

const Button = (props)=>{
  
  return(
    
    <button type='button' className='button' style={{
      width: "97%",
      height: "97%",
      backgroundColor: props.color,
      borderStyle: "none",
      borderRadius:"5%",
      fontSize: "2rem",
      fontWeight: "500",
      
     

      }}>

      <span>{props.text}</span>
      
    </button>
    
)
}




function LeftCalculatorStyled() {
  return (
    <Grid>
    <KeyboardGrid>
      <KeyUp><Button text="UP" color="#ABABAB"/></KeyUp>
      <KeyDown><Button text="DOWN" color="#ABABAB"/></KeyDown>
      <KeyNone><Button text="" color="#ABABAB"/></KeyNone>
      <KeyZero><Button text="0" color="#D4E6FF"/></KeyZero>
      <KeyDot><Button text="." color="#D4E6FF"/></KeyDot>
      <KeyOne><Button text="1" color="#D4E6FF"/></KeyOne>
      <KeyTwo><Button text="2" color="#D4E6FF"/></KeyTwo>
      <KeyThree><Button text="3" color="#D4E6FF"/></KeyThree>
      <KeyFour><Button text="4" color="#D4E6FF"/></KeyFour>
      <KeyFive><Button text="5" color="#D4E6FF"/></KeyFive>
      <KeySix><Button text="6" color="#D4E6FF"/></KeySix>
      <KeySeven><Button text="7" color="#D4E6FF"/></KeySeven>
      <KeyEight><Button text="8" color="#D4E6FF"/></KeyEight>
      <KeyNine><Button text="9" color="#D4E6FF"/></KeyNine>
      <KeyPercent><Button text="%" color="#ABABAB"/></KeyPercent>
      <KeyBack><Button text="BACK" color="#ABABAB"/></KeyBack>
      <KeyEnter><Button text="ENTER" color="#ABABAB"/></KeyEnter>
    </KeyboardGrid>
    <SideBarContainer>
      <ButtonContainer>
        <SideButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer> <SideButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer> <ModalButton 
          text="MODAL"
          color="#ABABAB" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
         <DarkThemeButton />
      </ButtonContainer>
    </SideBarContainer>
    
    </Grid>
  )
}

export default LeftCalculatorStyled