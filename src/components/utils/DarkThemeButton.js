import React from "react";
import { useCustomTheme , useCustomThemeUpdate } from "../../context/CustomThemeContext";
import IconButton from "../IconButton/IconButton";

const DarkThemeButton = () =>{

    const darkTheme = useCustomTheme();
    const toggleDarkTheme = useCustomThemeUpdate();

    const activeIcon = darkTheme? 'fa-solid fa-sun': 'fa-solid fa-moon'


    return(
        <IconButton 
            
            icon={activeIcon}
            onClick={toggleDarkTheme}
        /> 
    )

}

export default DarkThemeButton