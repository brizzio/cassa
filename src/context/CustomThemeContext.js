import React, { useContext, useState } from 'react'


const CustomThemeContext = React.createContext()
const CustomThemeUpdateContext = React.createContext()

export function useCustomTheme() {
    return useContext(CustomThemeContext)
}

export function useCustomThemeUpdate(){
    return useContext(CustomThemeUpdateContext)
}


export function CustomThemeProvider({ children }) {

    const [darkTheme, setDarkTheme] = useState(false)

    function toggleDarkTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <CustomThemeContext.Provider value = {darkTheme}>
            <CustomThemeUpdateContext.Provider value = {toggleDarkTheme}>
                {children}
            </CustomThemeUpdateContext.Provider>
        </CustomThemeContext.Provider>
    )

}