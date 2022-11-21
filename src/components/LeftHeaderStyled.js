import React from 'react'
import styled from 'styled-components'
import img from '../images/coopLogo.png'
import { useAuthUpdate } from '../context/AuthContext'



const Wrapper = styled.div`

    display: flex;
    flex-direction:row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-top:1%;
    padding-bottom:6px;
    margin-right:5%;
    margin-left:5%;
    
    
`

const Logo = styled.div`

height:100%;
padding:5px;


.pic {
  
  height: 40px;
  
  
}

`

const Card = (props) => {

  const Wrapper = styled.div`

    display: flex;
    flex-direction:column;
    justify-content: space-around;
    margin:0;
 
  `

  const StyledValue = styled.div`

    //font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 33.3861px;
    line-height: 39px;
    display: flex;
    align-items: center;
    letter-spacing: -0.032em;
    text-transform: uppercase;

    color: #FFFFFF;

  `

  const StyledTitle = styled.div`

    //font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 11.7512px;
    line-height: 14px;
    /* identical to box height, or 117% */

    display: flex;
    align-items: center;
    letter-spacing: -0.032em;
    text-transform: uppercase;

    color: #FFFFFF;


`

  return (
    <Wrapper>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledValue>{props.value}</StyledValue>

    </Wrapper>
  )

}

const CardWrapper = styled.div`
    width: 23vw;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    
`

const Separator = function(){

  const StyledDiv = styled.div`

  display: inline-block;
  width: 2.64px;
  height: 31.32px;
  background: white;


  `

  return(
    <StyledDiv />
  )

}


function LeftHeaderStyled() {

  const user = useAuthUpdate().user

  const code = user.employee_code?user.employee_code:'0000'

  return (
   
   <Wrapper>
       
        <Logo><img className='pic' src={img} alt=''/></Logo>
        
        <CardWrapper>
          <Card title='Negozio' value='001'/>
          <Separator />
          <Card title='Cassa' value='056'/>
          <Separator />
          <Card title='Operatore' value={code}/>
        </CardWrapper>
        
    </Wrapper>
  )
}

export default LeftHeaderStyled