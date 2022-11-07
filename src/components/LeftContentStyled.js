import React, { useState } from 'react'
import styled from 'styled-components'

let Grid = styled.div`

  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  gap: 0%;
  //border-style:solid;
  border-color:yellowgreen;
  min-height:100%;
 

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

  const items = [
    {
      id:1,
      product:"Pane Bianco Naturale",
      price:"3.56",
      letter:"TFA"
    },
    {
      id:2,
      product:"Latte Scremato",
      price:"3.56",
      letter:"FA"
    },
    {
      id:3,
      product:"12 Uova Grandi",
      price:"3.56",
      letter:"FC"
    },
    {
      id:4,
      product:"Carta Stangnola",
      price:"3.56",
      letter:"C"
    },
    {
      id:5,
      product:"Coca Cola",
      price:"3.56",
      letter:"PR"
    }
  ]

  const [data, setData] = useState(items)



  const removeItem = (id) => {

    console.log("remove " + id)

  }


  const renderItems = () => {

    const LiStyled = styled.li`

      display:grid;
      grid-template-columns:50% 20% 20% 10%
    
    `
    

    const mapRows = data.map((item, index) => (
        <>
            <LiStyled key={item.id} >
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>{item.product}</span>
                <span>{item.price}</span>
                <span>{item.letter}</span>
                <button onClick={() => removeItem(item.id)}>
                    X
                </button>
            </LiStyled>
        </>
    ));
    return mapRows;
};


  return (

      <div>
        <ul style={
          {
            display:"flex",
            flexDirection:"column",
            gap:"10px",
            listStyleType: "none",
            paddingRight: "20px"
          }
        }>
          {renderItems()}
        </ul>
      </div>


  )


}


function LeftContentStyled() {
  return (
    <Grid>
    <div>
      <ListComponent />
    </div>
    <BtnContainer>
      <BtnNovo>
        <Button onClick={handleClick} bgColor={'#6966FF'}>Novo Cliente</Button>
      </BtnNovo>
      <BtnCancella>
        <Button onClick={handleClick} bgColor={'#FF8D8D'}>Cancella</Button>
      </BtnCancella>
    </BtnContainer>
    
    </Grid>
  )
}

export default LeftContentStyled