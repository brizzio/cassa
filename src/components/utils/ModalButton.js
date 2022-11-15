import React from "react";
import { useModal , useModalUpdate } from "../../context/ModalContext";


const ModalButton = (props) =>{

   const tgg = useModalUpdate();
      
    return(
        <button 
      type='button' 
      style={{
              width: "97%",
              height: "97%",
              backgroundColor: props.color,
              borderStyle: "none",
              borderRadius:"5%",
              fontSize: "1em",
              fontWeight: "500"

              }}
        onClick={tgg}
      
      >

      <span>{props.text}</span>
      
      
    </button>
    )

}

export default ModalButton