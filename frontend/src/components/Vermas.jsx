import React from 'react'
import { useStateValue } from "../StateProvider"
import { Link } from "react-router-dom";

export default function Vermas() {

    const [{ detalle }, dispatch] = useStateValue()

    return (
        <>
            {
            detalle.map((car) => {
                return (
                  <div className="container text-center">
                    <div className="p-4" key={car.Id + 1}>
                      <div className="card" style={{ width: "16rem" }}>
                        <img className="card-img-top" src={"http://localhost:3001/" + car.image} alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{car.nombreProducto}</h5>
                          <p className="card-text">{"Precio " + car.precio + "$"}</p>
                          <p className="card-text">{"Unidades Disponibles: " + car.cantidad + ""}</p>
                        </div>
                      </div>
                    </div>
                    <Link className='btn btn-primary mb-2' to={'/'}>Atras</Link>
                  </div>  
                )
              })
        }

        </>
    );
}
