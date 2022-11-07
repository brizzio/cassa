import React from 'react'
import styled from 'styled-components'
import RoundedArrowSVG from './icons/RoundedArrowSVG'
import TimeStyled from './utils/TimeStyled'


const Wrapper = styled.div`
    min-height:100%;
    align-items:center;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right:10px;
    
    

`
const MarelLogo = styled.div`
    display:flex;
    flex-direction:row;
    height: 100%;
    color:white;
    gap:5px;
    margin-left:10px;
`

function HeaderStyled() {
  return (
    <Wrapper>
        <MarelLogo>
            <div>MAREL</div>
            <div><RoundedArrowSVG /></div>
        </MarelLogo>
        <TimeStyled textColor="white"/>
    </Wrapper>
  )
}

export default HeaderStyled