import styled from 'styled-components'
import LeftHeaderStyled from './components/LeftHeaderStyled';
import LeftContentStyled from './components/LeftContentStyled';
import LeftDisplayStyled from './components/LeftDisplayStyled';
import LeftCalculatorStyled from './components/LeftCalculatorStyled';
import RightCommandStyled from './components/RightCommandStyled';
import RightSideScrollBarStyled from './components/RightSideScrollBarStyled';
import HeaderStyled from './components/HeaderStyled';
import FooterStyled from './components/FooterStyled';

import { CustomThemeProvider, useCustomTheme} from './context/CustomThemeContext'
import { ModalProvider , useModal} from './context/ModalContext'



function App() {

  

  return (
    
    <CustomThemeProvider>
      <ModalProvider>
        
        <ApplicationContainer>

          <HeaderContainer>
            <HeaderStyled />
          </HeaderContainer>

          <MainConteiner>

            <MainGrid>

                <LeftConteiner>
                  <LeftHeaderConteiner>
                    <LeftHeaderStyled />
                  </LeftHeaderConteiner>
                  <LeftContentConteiner>
                    <LeftContentStyled />
                  </LeftContentConteiner>
                  <LeftDisplayConteiner>
                    <LeftDisplayStyled />
                  </LeftDisplayConteiner>
                  <LeftCalculatorConteiner>
                    <LeftCalculatorStyled />
                  </LeftCalculatorConteiner>
                </LeftConteiner>
                <RightConteiner>
                  <CommandConteiner>
                    <RightCommandStyled />
                  </CommandConteiner>
                  <SideScrollBarConteiner>
                    <RightSideScrollBarStyled />
                  </SideScrollBarConteiner>
                </RightConteiner>
            </MainGrid>
            
          </MainConteiner>
          
          <FooterConteiner><FooterStyled /></FooterConteiner>

        </ApplicationContainer>

        </ModalProvider>
    </CustomThemeProvider>
    
  );
}


const ApplicationContainer = ({children})=>{
  
  const bgColor = useCustomTheme()?'#333': '#CCC'

  const AppStyledDiv = styled.div`

  display: grid;
  grid-template-columns: 1fr;
  background-color: ${bgColor};
  grid-template-rows: 3% 93% 3%;
  /* border-style:solid; */
  border-color:red;
  height: 99vh;
  //max-height: 100%;
  max-width: 100%;
  margin: 5px;

` 
return (
  <AppStyledDiv>
    {children}
  </AppStyledDiv>
)
}

const HeaderContainer = styled.div`
  
  grid-column: 1 / 4;
  grid-row: 1;
  min-height:100%;
  //border-style:solid;
  background-color: #80ABEB;

` 
const MainConteiner = styled.div`
  grid-template-columns: 1fr;
  grid-template-rows: 100%;
  border-style:solid;
  //min-height:100%;
  border-color:blueviolet;

` 

const MainGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100%;
  gap: 0.5%;
  border-style:solid;
  border-color:yellowgreen;
  //min-height:100%;
  margin-top: 0.2%;

` 

const LeftConteiner = styled.div`
  grid-column:1;
  display:grid;
  //grid-template-columns: 1fr;
  grid-template-rows: 7% 33% 20% 38%;
  border-style:solid;
  height:100%;

  
`

const LeftHeaderConteiner = styled.div`
  
 
  grid-row:1;
  border-style:solid;
  min-height:100%;
  background-color:#9593FD;
  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;
  
`

const LeftContentConteiner = styled.div`
  
  grid-row:2;
  border-style:solid;
  min-height:100%;
  border-color:goldenrod;

`

const LeftDisplayConteiner = styled.div`
  
  grid-row:3;
  border-style:solid;
  background-color: #455E7B;
  min-height:100%;
  //border-color:#455E7B;

`

const LeftCalculatorConteiner = styled.div`
  
  grid-row:4;
  border-style:solid;
  height: 100%;
  border-color:beige;

`

const RightConteiner = styled.div`
  grid-column: 2;
  grid-row:1;
  min-height:100%;
  display:grid;
  grid-template-columns: 85% 15%;
  //border-style:solid;

`

const CommandConteiner = styled.div`
  //border-style:solid;
  min-height:99%;
  border-color:beige;

`
const SideScrollBarConteiner = styled.div`
  //border-style:solid;
  min-height:99%;
  border-color:beige;

`


 const FooterConteiner = styled.div`
    grid-column: 1 / 4;
    grid-row: 3;

 `


export default App;
