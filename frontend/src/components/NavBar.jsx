import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

import Carrito from "./Carrito";
import Productos from "./Productos";
//import Tienda from "./Tienda"
import Login from "./Login";
import Vermas from "./Vermas";

export default function NavBar({setVerificarUsuario}) {
  const [{ carrito }, dispatch] = useStateValue();

  const cerrarSeccion = () =>{
    setVerificarUsuario(false)
}

  return (
    <Router>
      <div className="container my-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              La Bodega
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/productos"
                  >
                    <i className="fas fa-grip-horizontal"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/carrito">
                    <i className="fas fa-cart-arrow-down">
                      {carrito.length < 1 ? (
                        ""
                      ) : (
                        <span className="badge badge-pill badge-danger">
                          {carrito.length}
                        </span>
                      )}
                    </i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mensaje">
                    <i className="fas fa-inbox"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="fas fa-sign-out-alt" onClick={cerrarSeccion}></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Productos />
        </Route>
        <Route path="/carrito">
          <Carrito />
        </Route>
        {/* <Route exact path="/salir">
          <Login />
        </Route> */}
        <Route path="/productos">
          <Productos />
        </Route>
        <Route exact path={`/verMas`}> 
            <Vermas /> 
        </Route>
      </Switch>
    </Router>
  );
}
