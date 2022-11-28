import React from 'react'
import styled from 'styled-components'
import CartSVG from './icons/CartSVG'
import ScaleSVG from './icons/ScaleSVG'
import BagSVG from './icons/BagSVG'

import {useStore} from '../context/Store'
import { useState } from 'react'

let Grid = styled.div`
  grid-column:1;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 30% 40% 30%;
  gap: 0%;
  min-height:100%;
 

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

const ScannerResult = (props)=>{

    
    const ProdName = props.info.title
    const ProdUPC = props.info.ean
    const ProdPrice = (props.info.price === 0)?"":Number(props.info.price).toFixed(2)

    const Description = styled.div`
      display:flex;
      flex-direction:column;
      color:white;

      .product {
        font-size: 1.6em;
      }

      .upc {
        font-size: 0.8 em;
      }
    `

    const Value = styled.div`
      display:block;
      align-items:center;
      color:white;
      font-size: 2em;

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

const Totals = (props) => {

  console.log('no totals ===> ', props.summary)
  
  const CartItemsCount = props.summary.count;
  const TotalWeightKg = props.summary.weight;
  const BagsCount = props.summary.bags
  const Total= Number(props.summary.total).toFixed(2)

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
      font-size: 25px;
      
    }

    

    .ico{
      display:block;
      align-items:center;
      transform: scale(2);
      margin-bottom:5px;
    }

  `

  const TotalsWrapper = styled.div`
  
    display:flex;
    flex-direction: row;
    align-items:center;
    height:100%;
    color:white;
    .pview {
      font-size: 30px;
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
          <span className="pview">€ {Total}</span>
        </TotalsWrapper>
    </>  

  )

}


function LeftDisplayStyled() {

  const list = useStore().currentCartItems

  

  console.log('no display')
  console.log(list, typeof(list))

  var item = list?list[list.length - 1]:{}

  console.log('item>>>',item, typeof(item),item===undefined)
  //const ean = (item.ean)?item.ean:'7895556869'

  const info = (item===undefined)?
  {title:"", price:0, ean:""}:
  { title:item.title,
    price:item.price,
    ean:item.ean || "78899999888"
  }

  

  console.log('info')
  console.log(info)

  let summary = useStore().summary()

  summary=(!summary.total)?{bags:0,count:0,total:0,weight:0}:summary

  return (
    <Grid>
      <ScannerDisplay>
        <ScannerResult info={info} />
      </ScannerDisplay>
      <DisplayTotals>
        <Totals summary={summary}/>
      </DisplayTotals>
    
    </Grid>
   
  )
}

export default LeftDisplayStyled