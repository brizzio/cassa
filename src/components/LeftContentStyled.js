import React, { useState } from 'react'
import styled from 'styled-components'

import { useStore } from '../context/Store'

import NewCartModal from '../components/PopUp/NewCartModal'




let Grid = styled.div`
  grid-column:1;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  gap: 0%;
  //border-style:solid;
  border-color:yellowgreen;
  min-height:100%;
 

` 

const DisplayWrapper = styled.div`
  
  
  min-height:280px;
  max-height:280px;
  overflow-y:scroll;
  transform: scaleX(-1);

  ul {
    display:flex;
    flex-direction:column;
    gap:5px;
    list-style-type: none;
    padding-right:20px;
    transform: scaleX(-1);
  
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
  border-radius: 50px;
  border: 6px solid #ffffff;
}
  
`


let BtnContainer = styled.div`

    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
`

let BtnNovo = styled.div`

    height:60%;
    width:100%;
    align-items: center;
    //border-style:solid;
`
let BtnCancella = styled.div`

    height:40%;
    width:100%;
    align-items: center;
    //border-style:solid;
`

const Button = ({ type = 'button', onClick, bgColor, children }) => {
  
  
  const ButtonStyled = styled.button`
    margin:0;
    height:100%;
    width:100%;
    background: ${bgColor};
    font-size: 15.7311px;
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

const handleClick = (message) => {
  console.log('button click');
};


const ListComponent = (props) =>{

  const remove = useStore().removeItemFromCart

  console.log('list component')
  console.log(props.list)

  const items = props.list

  
  const removeItem = (item) => {

    console.log("remove " + item)

    remove(item)
  }


  const renderItems = () => {

    const LiStyled = styled.li`

      display:grid;
      grid-template-columns:50% 20% 20% 10%
    
    `
    

    var mapRows = items.map((item, index) => (
        <>
            <LiStyled key={item.id} >
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>{item.title}</span>
                <span>{item.price}</span>
                <span>{item.letter}</span>
                <button onClick={() => removeItem(item)}>
                    X
                </button>
            </LiStyled>
        </>
    ));
    console.log('items.lenght ',items, Object.keys(items).length)
    if(Object.keys(items).length === 1){ mapRows=<LiStyled></LiStyled>}

    return mapRows;
};


  return (

      <DisplayWrapper>
        <ul>
          {renderItems()}
        </ul>
      </DisplayWrapper>


  )


}






function LeftContentStyled() {



  return (
    <Grid>
    <div>
      <ListComponent list={useStore().currentCartItems}/>
    </div>
    <BtnContainer>
      <BtnNovo>
      
        <NewCartModal /> 
        
      </BtnNovo>
      <BtnCancella>
        <Button onClick={handleClick} bgColor={'#FF8D8D'}>Cancella</Button>
      </BtnCancella>
    </BtnContainer>
    
    </Grid>
  )
}

export default LeftContentStyled