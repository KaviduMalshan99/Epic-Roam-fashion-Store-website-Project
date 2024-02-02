
import "./App.css"
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom';


import Men from '../src/Pages/Men';
import Women from '../src/Pages/Women';
import Login from '../src/Pages/Login';
import Register from '../src/Pages/Register';
import Gift from '../src/Pages/GistWoucher';
import Footer from './components/Footer';

import Abouth from '../src/Pages/AboutUs';
import Carrias from '../src/Pages/Carrias';
import Privacy from '../src/Pages/PrivacyyPolicy';
import Return from '../src/Pages/Return';
import Affliate from '../src/Pages/Affliate';
import ImageSlider from './components/ImageSlider';
import NewArrivals from './Pages/NewArrivals';
import AccessoriesMain from './mainpage sections/AccessoriesMain';
import Product from './Pages/Product';
import productacc from './Pages/productAcc';
import productnew from './Pages/productNew';
import AddToCart from "./Pages/AddToCart";




const App = () => {
  
  return (
    <>
      <Header/>
      
      <Routes>
        
        <Route path='/men' element={Men}></Route>
        <Route path='/women' element={Women}></Route>
        <Route path='/login' element={Login}></Route>
        <Route path='/register' element={Register}></Route>
        <Route path='/gift' element={Gift}></Route>
        <Route path='/cart' element={AddToCart}></Route>

        <Route path='/about' element={Abouth}></Route>
        <Route path='/carrias' element={Carrias}></Route>
        <Route path='/privacy' element={Privacy}></Route>
        <Route path='/return' element={Return}></Route>
        <Route path='/affliate' element={Affliate}></Route>
        <Route path='/product/:id' element={Product}></Route>
        <Route path='/productacc/:id' element={productacc}></Route>
        <Route path='/productnew/:id' element={productnew}></Route>
        


      </Routes>
      <ImageSlider/>
      <NewArrivals/>
      <AccessoriesMain/>



      <Footer/>
      
    </>
    
  )
}

export default App