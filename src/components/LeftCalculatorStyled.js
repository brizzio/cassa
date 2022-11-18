import React, { useState } from 'react'
import styled from 'styled-components'
import SideButton from './SideButton/SideButton'
import ArrowUpSVG from './icons/ArrowUpSVG'
import Erase from './icons/EraseSVG'
import Bag from './icons/BagSVG'
import DarkThemeButton from './utils/DarkThemeButton'
import ModalButton from './utils/ModalButton'
import LoginModal from './PopUp/LoginModal'
import { useAuth , useAuthUpdate } from '../context/AuthContext'


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
  gap: 0.5%;
  border:none;
  justify-content:center;
  align-content:center;
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
  align-items: center; 
  

 span{
  display: flex;
  justify-content:center;
  align-items: center; 
  
  }

  i {
 
    height:30px;
    }
  
`
let KeyDown = styled.div`

  grid-column: 1;
  grid-row: 2;
  
  display: flex;
  justify-content:center;
  align-items: center; 
  

 span{
  display: flex;
  justify-content:center;
  align-items: center; 
  
  height:95%;
  
  }

  i {
    
    height:100%;
    }
  
`
let KeyNone = styled.div`

  grid-column: 1;
  grid-row: 3 / 5;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`

let KeyZero = styled.div`

  grid-column: 2 / 4;
  grid-row: 4;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyDot = styled.div`

  grid-column: 4;
  grid-row: 4;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyOne = styled.div`

  grid-column: 2;
  grid-row: 3;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyTwo = styled.div`

  grid-column: 3;
  grid-row: 3;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyThree = styled.div`

  grid-column: 4;
  grid-row: 3;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyFour = styled.div`

  grid-column: 2;
  grid-row: 2;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyFive = styled.div`

  grid-column: 3;
  grid-row: 2;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeySix = styled.div`

  grid-column: 4;
  grid-row: 2;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeySeven = styled.div`

  grid-column: 2;
  grid-row: 1;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyEight = styled.div`

  grid-column: 3;
  grid-row: 1;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyNine = styled.div`

  grid-column: 4;
  grid-row: 1;
  //border-style:solid;
  display: flex;
  justify-content:center;
  align-items: center; 
  
`
let KeyPercent = styled.div`

  grid-column: 5;
  grid-row: 1;
  display: flex;
  justify-content:center;
  align-items: center; 
  

 span{
  display: flex;
  justify-content:center;
  align-items: center; 
  
  }

  i {
 
    height:30px;
    }
  
`
let KeyBack = styled.div`

  grid-column: 5;
  grid-row: 2;
  display: flex;
  justify-content:center;
  align-items: center; 
  

 span{
  display: flex;
  justify-content:center;
  align-items: center; 
  
  }

  i {
 
    height:30px;
    }
  
`
let KeyEnter = styled.div`

  grid-column: 5;
  grid-row: 3 / 5;
  display: flex;
  justify-content:center;
  align-items: center; 
  

 span{
  display: flex;
  justify-content:center;
  align-items: center; 
  
  }

  i {
 
    height:30px;
    }
   
  
  
`

const Button = (props)=>{
  
  return(
    
    <button 
    type='button' 
    className='button' 
    onClick = {props.onClick}
    disabled={props.disabled}
    style={{
      width: "97%",
      height: "97%",
      backgroundColor: props.color,
      borderStyle: "none",
      borderRadius:"5%",
      fontSize: "2rem",
      fontWeight: "500",
      color:"#5D6174"
      
     

      }}>

      {props.text && <span>{props.text}</span>}

      {props.icon && <span><i className={props.icon} /></span>}
    </button>
    
)
}





function LeftCalculatorStyled() {
  
  const access = useAuthUpdate()

const auth = useAuth()



  return (
    <Grid>
    <KeyboardGrid>
      <KeyUp><Button icon="fa-solid fa-sort-up fa-2x" color="#ABABAB"/></KeyUp>
      <KeyDown><Button icon="fa-solid fa-sort-down fa-2x"  color="#ABABAB"/></KeyDown>
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
      <KeyPercent><Button icon="fa-solid fa-percent " color="#ABABAB"/></KeyPercent>
      <KeyBack><Button icon="fa-solid fa-delete-left" color="#ABABAB"/></KeyBack>
      <KeyEnter><Button icon="fa-solid fa-arrow-right-to-bracket " color="#ABABAB"/></KeyEnter>
    </KeyboardGrid>
    <SideBarContainer>
      <ButtonContainer>
        <LoginModal />
      </ButtonContainer>
      <ButtonContainer> 
        <button onClick={
          () =>{
            window.alert("logout")
            access.logout()
          }
        }>Logout</button>
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