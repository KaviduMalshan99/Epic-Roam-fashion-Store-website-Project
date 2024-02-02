import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Men from './Pages/Men.jsx';
import Women from './Pages/Women.jsx';
import Login from './Pages/Login.jsx';
import Gift from './Pages/GistWoucher.jsx';
import Register from './Pages/Register.jsx';

import Abouth from './Pages/AboutUs.jsx';
import Carrias from './Pages/Carrias.jsx';
import Privacy from './Pages/PrivacyyPolicy.jsx';
import Return from './Pages/Return.jsx';
import Affliate from './Pages/Affliate.jsx';
import Product from './Pages/Product.jsx';
import ProductAcc from './Pages/productAcc.jsx';
import ProductNew from './Pages/productNew.jsx';
import AddToCart from './Pages/AddToCart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<AddToCart />} />

        <Route path="/about" element={<Abouth />} />
        <Route path="/carrias" element={<Carrias />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/return" element={<Return />} />
        <Route path="/affliate" element={<Affliate />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/productacc/:id" element={<ProductAcc />} />
        <Route path="/productnew/:id" element={<ProductNew />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
