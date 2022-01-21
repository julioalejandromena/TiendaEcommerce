import Login from "./components/Login";
//import { useStateValue } from "../StateProvider"
//import Main from "./components/Main";
import React, {useState} from "react";

//import SubirImagen from './components/SubirImagen';
import Tienda from './components/Tienda'
const App = () => {

  const [verificarUsuario, setVerificarUsuario] = useState(false)
  return (
    <>

      {verificarUsuario === true ? <Tienda setVerificarUsuario={setVerificarUsuario} /> : <Login setVerificarUsuario={setVerificarUsuario} /> }
      
      {/* <Main /> */}
      {/* <Tienda /> */}
      {/* <SubirImagen /> */}

    </>
  )

}

export default App;

