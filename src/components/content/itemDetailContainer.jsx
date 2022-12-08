import React, {useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';
import ItemDetail from './itemDetail';





const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
      

    consultarBDD('../json/productos.json')
    .then(productos => {const productoAMostrar= productos.find(producto => producto.id === parseInt(id))
    setProducto(productoAMostrar) })

   
   
    }, [])
    
    
    return (
        
                <ItemDetail producto={producto}/>
            )

            }

export default ItemDetailContainer;
