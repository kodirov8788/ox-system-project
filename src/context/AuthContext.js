import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [error, seterror] = useState("")
    const [isLogged, setisLogged] = useState(false)
    console.log(isLogged)
    console.log(error)
    let navigate = useNavigate()

    const getUser = ({ data }) => {
        if (data.code) {
            seterror("Company name or Username or password wrong! ")
        }
        else {
            localStorage.setItem("auth", JSON.stringify(data))
            console.log(data)
            setisLogged(true)
            navigate("/")
        }
    }


    return <AuthContext.Provider value={{ getUser, seterror, error, isLogged, setisLogged }}>{children}</AuthContext.Provider>
}