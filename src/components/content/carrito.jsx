import React from 'react';
import { Link } from 'react-router-dom';

const Carrito = () => {
    return (
        <>
            <h1>Proximamente carrito de compras</h1>
            <h2><Link className="nav-link active" to="/">Volver al catálogo</Link></h2>
        </>
    );
}

export default Carrito;
