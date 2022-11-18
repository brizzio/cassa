import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()
const AuthUpdateContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export function useAuthUpdate(){
    return useContext(AuthUpdateContext)
}

const userModel = {
    id:'',
    uname:'',
    email:''
}

const sessionModel = {
    
        id:'',
        start_at:'',
        end_at:''
    
}

export function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false)

    const [loggedUser, setLoggedUser] = useState(userModel)

    const [session, setSession] = useState(sessionModel)


    function login(user) {
        setAuthenticated(true)
        setLoggedUser({
            ...loggedUser,
            uname: user
        })

        setSession({
            ...session,
            id: Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString(36).substr(0, 10),
            start_at:new Date()
        })
        
        console.log('Logged User')
        console.log(loggedUser)
        console.log(session)

    }

    function logout() {
        setAuthenticated(false)
        setLoggedUser(userModel)
        setSession(sessionModel)
    }

    return (
        <AuthContext.Provider value = {authenticated}>
            <AuthUpdateContext.Provider value = {{login:login , logout: logout, user:loggedUser, session:session}}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )

}
  

