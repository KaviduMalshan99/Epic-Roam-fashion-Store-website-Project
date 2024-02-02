import React from 'react'
import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/newdata.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Product.css';

import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const productNew = () => {

    const { id } = useParams();
  const product = data.find(item => item.id === parseInt(id, 10));
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!product) {
    return <div>Product Not Found!</div>;
  }
  return (
    <div>
      <Header />

      <p className='main1'><Link to='/'>HOME</Link>  <FaAngleRight /> <Link to="/men">MEN  </Link><FaAngleRight />  <Link to="/product/:id">{product.title} </Link></p>

      <div className="product-container">
        {/* Left Section */}
        <div className="left-section">
          <div className="main-image">
            <img src={selectedImage} alt={product.title} />
          </div>
          {Array.isArray(product.image1) && (
            <div className="small-images">
              {product.image1.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.title}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h1>{product.title}</h1>
          <div className="ratings1">
            <div className="stars1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
            </div>
            ({product.reviews} Reviews)
          </div>
          <div className="price1">{product.price}</div>

          {/* Size Selector (Add your sizes here) */}
          <label>Select Size: {selectedSize && <span>({selectedSize})</span>}</label>
          <div className="sizebutton">
            <button
              className={selectedSize === 'S' ? 'selected' : ''}
              onClick={() => handleSizeSelect('S')}
            >
              S
            </button>
            <button
              className={selectedSize === 'M' ? 'selected' : ''}
              onClick={() => handleSizeSelect('M')}
            >
              M
            </button>
            <button
              className={selectedSize === 'L' ? 'selected' : ''}
              onClick={() => handleSizeSelect('L')}
            >
              L
            </button>
            <button
              className={selectedSize === 'XL' ? 'selected' : ''}
              onClick={() => handleSizeSelect('XL')}
            >
              XL
            </button>
          </div>

          {/* Quantity */}
          <label>Quantity:</label>
          <div className="quantity-selector">
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>
          

          <div className="abs">
              {/* Add to Cart Button */}
                <div className="addcart">
                <button>Add to Cart</button>
                </div>
          

               {/* Buy Now Button */}
                  <div className="buyNow">
                  <button>Buy Now</button>
                  </div>
                  </div>
          
          
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default productNew