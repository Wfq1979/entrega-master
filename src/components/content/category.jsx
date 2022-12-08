import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';


const Category = () => {

    const [productos, setProductos] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.idCategoria === parseInt(id))
            console.log(productosCategoria)
            const cardProducto = productosCategoria.map(producto =>
                <div key={producto.id} className="card mb-3 m-5  d-flex justify-content-center align-items-center" style={{ width: '300px', height: 'auto' }}>
                    <h3 className="card-header">Cerveza {producto.nombre}</h3>
                    <div className="card-body">
                    </div>
                    <img style={{ width: '100%', height: '200px' }} src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <p className="card-text"> Categoría: {producto.nombreCategoria}</p>
                        <p className="card-text">Precio: {producto.precio}</p>
                        <p className="card-text">Stock disponible: {producto.stock}</p>
                        <button className='btn btn-dark verProductoBoton'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            setProductos(cardProducto)
        })
    }, [id]);
    return (
        <div className="row">
            {productos}
        </div>


    );
}

export default Category;
