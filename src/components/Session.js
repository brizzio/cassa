import React from "react";
import { useAuth, useAuthUpdate } from "../context/AuthContext";

export default function Session (props){
    const auth = useAuthUpdate()
    const user =auth.user
    const session = auth.session

    console.log(user)
    console.log(session)
    
    return(
        <div> Utente: {user.uname} -- Session Attiva: {session.id}</div>
    )

}