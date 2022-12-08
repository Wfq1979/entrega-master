import React from 'react';
import { Link } from 'react-router-dom';
import '../../estilos/App.css'

const ItemDetail = ({producto}) => {
    return (
        <>
           
    <div className="card mb-3 m-5  d-flex justify-content-center align-items-center rounded border-3 ">
                    <h3 className="card-header">Cerveza {producto.nombre}</h3>
                    <div className="card-body">
                    </div>
                    <img style={{ width: '400px', height: 'auto' }} src={"../../../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body infoDetalle">
                            <p className="card-text"> Categoría: {producto.nombreCategoria}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock disponible: {producto.stock}</p>
                            <p className="card-text"> {producto.descripcion}</p>
                            <div className='d-flex flex-row justify-content-around'>
                            <button className='botonDetalle btn btn-dark'><Link className='nav-link' to={`/cart`}>Agregar al carrito</Link></button>
                            <button className='botonDetalle btn btn-dark'><Link className='nav-link' to={`/Category/`+ producto.idCategoria}>Categoría {producto.nombreCategoria}</Link></button>
                            <button className='botonDetalle btn btn-dark'><Link className='nav-link' to={`/`}>Volver al catalogo</Link></button>
                            </div>
                    </div>
                </div>
     
        </>
    );
}

export default ItemDetail;
