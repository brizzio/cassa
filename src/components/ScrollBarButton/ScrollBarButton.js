import React from "react";

import classes from './ScrollBarButton.module.css'

const ScrollBarButton = (props) => {
    //console.log(classes)

    const cn = props.className?classes[props.className]:""
    const col = props.color?{color:props.color}:{color:"#5D6174"}
    //console.log(`${classes.button} ${cn}`)
    //console.log(col)
    
    return (
        <button
            type={props.type || "button"}
            className={`${classes.button} ${cn}`}
            onClick = {props.onClick}
            disabled={props.disabled}
        >
            <span className={classes.button__text}
            style={col}    
            >{props.text}</span>
            <span className={classes.button__icon}>
                <i className={props.icon} style={col} />
            </span>
        </button>
    )
}

export default ScrollBarButton