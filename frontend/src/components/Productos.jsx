import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../css/productos.css'
import Producto from './Producto';

export default function Productos() {

    const [image, setImage] = useState([]);
    const [productData, setProductData] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {

        Axios.get("http://localhost:3001/api/select")
            .then(datos => {
                setImage(datos.data.imageDir)
                setProductData(datos.data.result)
            })
    }, []);

    return (

        <div className="container mt-5">
            <div className="d-flex">
                <h2>Catalogo de Productos</h2>
                <input type="text" id="InputField" className="m-2 bg-warning float-right" placeholder="Search Product..."
                onChange={(e) => setSearch(e.target.value)} />
                <h4>Que estas buscando?</h4>
            </div>

            <div className="row">
                <div className="col-12">
                <div className="card-columns">
                    <Producto image={image} productData={productData} search={search}/>
                </div>
                </div>
            </div>
        </div>
    )
}
