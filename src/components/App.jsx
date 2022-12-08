import React from 'react';
import '../estilos/App.css';
import NavBar from './content/navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './content/itemListContainer';
import ItemDetailContainer from './content/itemDetailContainer';
import Cart from './content/cart';

import Category from './content/category';
import About from './content/About';
import Contacto from './content/Contacto';
import Footer from './content/Footer';

const App = () => {

    
    return (

        <>

<BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/producto/:id" element={<ItemDetailContainer/>} />
              <Route path="/category/:id" element={<Category/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </>
    );
}

export default App;



