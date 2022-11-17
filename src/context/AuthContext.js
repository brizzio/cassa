import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()
const AuthUpdateContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function useAuthUpdate(){
    return useContext(AuthUpdateContext)
}


export function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false)

    function toggleAuth() {
        setAuthenticated(auth => !auth)
    }

    return (
        <AuthContext.Provider value = {authenticated}>
            <AuthUpdateContext.Provider value = {toggleAuth}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )

}
  

