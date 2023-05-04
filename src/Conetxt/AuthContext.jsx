import { createContext } from "react";

export const AuthContext = createContext()

export const  AuthProvider =({ children })=>{
    let name = " sidin"
    return <AuthContext.Provider value={name}>{children}</AuthContext.Provider>
}