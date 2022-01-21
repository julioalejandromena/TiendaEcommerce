import React, { useState} from "react"
import { Link } from "react-router-dom"
//import Vermas from "./Vermas"
import { actionTypes } from "../reducer"
import {useStateValue} from "../StateProvider"
//import Axios from "axios"
//import './App.css';
//import axios from "axios";
import "../css/producto.css"


function Producto({ image, productData, search}) {
  const [pedido, setPedido] = useState(0)
  const [{carrito} ,dispatch] = useStateValue()

  // const hacerPedido = e =>{
      
  //     setPedido(e.target.value)
  //     document.getElementById("inputValue").value = (pedido < 0 ) ? 0 : pedido;
  // }


  /* const [image, setImage] = useState([]);
   const [upload, setUpload] = useState(null);
   const [recargar, setRecargar] = useState(false)
 
   useEffect(() => {
 
     Axios.get("http://localhost:3001/api/select")
       .then(datos => {
         console.log(datos.data)
         setImage(datos.data)
       })
 
     setRecargar(false)
   }, [recargar]);
 
   const selectionImagen = (e) => {
     setUpload(e.target.files[0])
   }
 
   const sendHandler = (e) => {
     e.preventDefault()
 
     if (!upload) {
       alert("debes escojer una imagen!")
       return
     }
 
     const formdata = new FormData()
     formdata.append("image", upload)
 
     axios.post("http://localhost:3001/api/insert", formdata, {
       Headers: { "Content-Type": "multipart/form-data" }
     })
     setRecargar(true)
     setUpload(null);
     document.getElementById("fileInput").value = null;
   }*/
  return (
    <>
      {/* <div className="App">

        <form>
          <input id="fileInput" type="file" onChange={selectionImagen} name="sampleFile" />
          <button onClick={sendHandler}>Upload!</button>
        </form>
  </div> */}

      {
        productData.filter((picture)=>{ // aqui hacemos el filtrado o busqueda de los producto
          if(search === "")
          {
            return picture;
          }
          else if(picture.nombre_producto.toLowerCase().includes(search.toLowerCase()))
          {
            return picture
          }
        }).map((picture) => {

          const cargar = (picture) => // funcion para despachar producto al carrito de la compra
          {
            dispatch({
              type : actionTypes.ANIADIR_AL_CARRITO,
              item :{
                image : image[picture.Id - 1],        
                nombreProducto : productData[picture.Id - 1].nombre_producto,
                precio :productData[picture.Id - 1].precio,
                cantidad : productData[picture.Id - 1].cantidad,
                pedido
              },
              payload : (productData[picture.Id - 1].precio * pedido ) 
            })

          }

          const verDetalle = () => // esta funcion muestra el producto en detalle
          {
            dispatch({
              type : actionTypes.VERMAS,
              items :{
                image : image[picture.Id - 1],        
                nombreProducto : productData[picture.Id - 1].nombre_producto,
                precio :productData[picture.Id - 1].precio,
                cantidad : productData[picture.Id - 1].cantidad,
                pedido
              },
              
            })

          }

          const hacerPedido = e =>{
      
            setPedido(e.target.value)
            document.getElementById("inputValue").value = (pedido < 1 ) ? 1 : pedido;
        }

          const aniadirCarrito = () => // funcion para aniadir producto al carrito de la compra
          {
            cargar(picture)
            var valor = document.getElementById("inputValue").value = 1;
            console.log("clg", valor);
            //console.log(picture);
          }

          return (
            <div className="container" key={picture.Id - 1}>              
                <div className="card  col-12 col-lg-12" style={{ width: "16rem" }}>
                  <img className="card-img-top" src={"http://localhost:3001/" + image[(picture.Id - 1)]} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{picture.nombre_producto}</h5>
                    <p className="card-text">{"Precio " + picture.precio + "$"}</p>
                    <p className="card-text">{"Unidades Disponibles: " + picture.cantidad + ""}</p>
                    <div className="">
                    <div className="d-flex">
                        <Link className="btn btn-primary" to={`/verMas`} onClick={verDetalle}>Ver Detalles</Link>
                      <div className="">
                      <button className="btn btn-warning mx-auto" onClick={aniadirCarrito}>Añadir</button>
                      </div>
                    </div>
                    </div>
                    <input className="mt-2 col-12" type="number" id="inputValue" onChange={hacerPedido}/>
                  </div>
                </div>
            </div>
          ) // fin del return

        }) // fin del metodo map
      }
    </>
  )


}

export default Producto;