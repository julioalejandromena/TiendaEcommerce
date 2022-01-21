import "../css/tienda.css"
import React from 'react'
import NavBar from "./NavBar"
//import Productos from './Productos'

function Tienda({setVerificarUsuario}) {
    return (
        <div className="tienda">
            <NavBar setVerificarUsuario={setVerificarUsuario}/>
            {/*<Productos />*/}            
        </div>
    )
}

export default Tienda
