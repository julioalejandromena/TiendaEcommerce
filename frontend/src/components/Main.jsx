import React, {useEffect, useState} from 'react'
import Tienda from "./Tienda"
import Login from './Login'
import {useStateValue} from "../StateProvider"
import Axios from 'axios'



export default function Main() {

    const [{usuario} ,dispatch] = useStateValue()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    useEffect(() => {
        Axios.get("http://localhost:3001/api/getUsuario")
        .then((datos) => {
            setEmail(datos.data[0].email) 
            setPassword(datos.data[0].password)})
            console.log("esto es el console.log", usuario.length);
    }, [])

    return (
        <div>
            {usuario.map(use =>{
                return ( (use.email === email && use.password === password ) && use.length < 1 ?  <Tienda /> : <Login /> )
            }) }
        </div>
    )
}
