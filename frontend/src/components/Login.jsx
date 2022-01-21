
import '../css/login.css'

import React, { Fragment, useState, useEffect } from 'react'

import Axios from 'axios'

export default function Login({setVerificarUsuario}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    // variables de conformicion de email y password
    const [emailConf, setEmailConf] = useState("")
    const [passwordConf, setPasswordConf] = useState("")


    useEffect(() => {
        Axios.get("http://localhost:3001/api/getUsuario")
        .then((datos) => {
            setEmailConf(datos.data[0].email) 
            setPasswordConf(datos.data[0].password)})
    }, [])

    const confirmarUsuario = () =>
    {
        if(email === emailConf && password === passwordConf)
        {
            setVerificarUsuario(true);
        }
    }

    return (
        <div className='fragment my-5'>
            <div className="container">
                <form className="row">
                    <h1 id="h1">Inicia Sesión</h1>
                    <div className="col-ms-12">
                        <label for="validationDefault01" class="form-label">Correo Electrónico:</label>
                        <input type="email" className="form-control" id="email" placeholder='julioado@live.com' required onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div class="col-ms-12">
                        <label for="validationDefault02" class="form-label">Contraseña:</label>
                        <input type="password" className="form-control" id="psw" placeholder='julio_mena' required onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="col-ms-12">
                        <button className="btn btn-success btn-block my-4" onClick={confirmarUsuario}>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
