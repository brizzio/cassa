import React from 'react'
import styled from 'styled-components'
import ActionButton from './ActionButton/ActionButton'

import {useStore} from '../context/Store'

let Grid = styled.div`

  display: grid;
  grid-template-columns: repeat(3 , 1fr);
  grid-template-rows: repeat(11 , 1fr);
  gap: 0.4%;
  //border-style:solid;
  //border-color:yellowgreen;
  min-height:99%;
 

` 
let ButtonContainer = styled.div`

  //border-style:solid;
    align-items: center;
    min-height:98%;
`

let ButtonActionContainer = styled.div`

    grid-column: 1 / 4;
    //border-style:solid;
    align-items: center;
    min-height:98%;
`

function RightCommandStyled() {

  const store = useStore()

  return (
    <Grid>
      <ButtonContainer>
      <ActionButton 
          text="CHIUDI CASSA"
          icon="fa-solid fa-circle-xmark" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>
      <ButtonContainer>
      <ActionButton 
          text="BLOCCA"
          icon="fa-solid fa-lock" //fa-arrow-right-to-bracket
        />
      </ButtonContainer>

      <ButtonActionContainer>
        <button onClick={store.close}>CHIUDI CONTO</button>
      {/* <ActionButton 
          className="closer"
          text="CHIUDI CONTO"
          icon="fa-solid fa-caret-right" //fa-arrow-right-to-bracket
          color="white"
          onClick={()=>store.close}
        /> */}
      </ButtonActionContainer>
    </Grid>
  )
}

export default RightCommandStyled