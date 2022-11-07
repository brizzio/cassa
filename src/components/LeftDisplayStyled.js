import React from 'react'
import styled from 'styled-components'
import CartSVG from './icons/CartSVG'
import ScaleSVG from './icons/ScaleSVG'
import BagSVG from './icons/BagSVG'

let Grid = styled.div`

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 30% 40% 30%;
  gap: 0%;
  min-height:95%;
 

` 
let ScannerDisplay = styled.div`
  grid-row:1;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  //border-style:solid;
  min-height:100%;
  margin-right:2%;

`
let DisplayTotals = styled.div`
  grid-row:3;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  border-top:solid;
  border-color:white;
  min-height:100%;
  padding-right:2%;

`

const ScannerResult = ()=>{

    const [ProdName, setProdName] = React.useState('Mussum Ipsum, cacilds vidis litro abertis.')
    const [ProdUPC, setProdUPC] = React.useState('7895556847')
    const [ProdPrice, setProdPrice] = React.useState('12,00')

    const Description = styled.div`
      display:flex;
      flex-direction:column;
      color:white;

      .product {
        font-size: 2rem;
      }

      .upc {
        font-size: 0.8 rem;
      }
    `

    const Value = styled.div`
      display:block;
      align-items:center;
      color:white;
      font-size: 2.5rem;

    `

    return(
      
      <>
        <Description>  
          <span className="product">{ProdName}</span>
          <span className="upc">{ProdUPC}</span>
        </Description>
        <Value>
        <span className="price">{ProdPrice}</span>
        </Value>
      </>
      
      
      
    )

}

const Totals = () => {

  const [CartItemsCount, setCartItemsCount] = React.useState('7');
  const [TotalWeightKg, setTotalWeightKg] = React.useState('13.5');
  const [BagsCount, setBagsCount] = React.useState('0')
  const [Total, setTotal] = React.useState(130.50)

  const Wrapper = styled.div`
  
    display:flex;
    flex-direction:row;
    color:white;
    width: 500px;
    max-height:100%;
    justify-content: space-around;
    align-items:center;

    
    


    .pair {
      display:flex;
      flex-direction:row;
      width:40%;
      justify-content: center;
      align-items:center;
      gap:15px;
      font-size: 30px;
      
    }

    

    .ico{
      display:block;
      align-items:center;
      transform: scale(2);
      margin-bottom:5px;
    }

  `

  const TotalsWrapper = styled.div`
  
  
    color:white;
    .pview {
      font-size: 40px;
    }

  `

  return (

    <>
    
        
        <Wrapper>

          <div className="pair">
            <span className="ico"><CartSVG /></span>
            <span className="text">{CartItemsCount}</span>
          </div>

          <div className='pair'>
            <span className='ico'><ScaleSVG /></span>
            <span>{TotalWeightKg} Kg</span>
          </div>
          
          <div className='pair'>
            <span className='ico'><BagSVG /></span>
            <span>{BagsCount}</span>
          </div>

        </Wrapper>
       
        <TotalsWrapper>
          <span className="pview">€ {Total.toFixed(2)}</span>
        </TotalsWrapper>
    </>  

  )

}


function LeftDisplayStyled() {
  return (
    <Grid>
      <ScannerDisplay>
        <ScannerResult />
      </ScannerDisplay>
      <DisplayTotals>
        <Totals />
      </DisplayTotals>
    
    </Grid>
   
  )
}

export default LeftDisplayStyled