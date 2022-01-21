import React from 'react'
import { actionTypes } from '../reducer'
import { useStateValue } from "../StateProvider"
import { Link } from "react-router-dom";

export default function Carrito() {

  const [{ carrito }, dispatch] = useStateValue()

  const cancelarPedido = () =>
  {
    dispatch({
      type : actionTypes.CANCELARPEDIO
    }) 
  }

  const pagando = () =>
  {
    alert("Gracias Por Preferirnos!")
    dispatch({
      type : actionTypes.PAGAR
    })
  }
  return (
    <>
      <div className="container card-columns">
        {
          carrito < 1 ?
            <div className="row">
              <div className="col-8">
                <h5>El Carrito esta Vacio. Elije Algo De La Tienda </h5>
              </div>
             </div>
             :
            carrito.map((car) => {
              return (              
                    <div className="col-8" key={car.Id}>
                      <div className="card" style={{ width: "16rem" }}>
                        <img className="card-img-top" src={"http://localhost:3001/" + car.image} alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{car.nombreProducto}</h5>
                          <p className="card-text">{"Precio " + car.precio + "$"}</p>
                          <p className="card-text">{"Unidades Disponibles: " + car.cantidad + ""}</p>
                          <p className="card-text">{"Cantidad a Comprar " + (car.pedido)} </p>
                        </div>
                      </div> 
                    </div> 
              )
            })
        }

        <div className="col-4">
          <h5 className="text-right">Total a Pagar {carrito.map((ca) => (ca.precio * ca.pedido))}</h5>
          <div className="d-flex">
            <Link to={"/"} className="btn btn-warning m-2" onClick={cancelarPedido}>Cancelar</Link>
            <Link to={"/"} className="btn btn-primary m-2" onClick={pagando}>Pagar</Link>
          </div>
          </div>
         </div>
    </>
  )
}
