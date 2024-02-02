import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import data from '../Data/Accessories.json'
import "./Men.css"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const GistWoucher = () => {
  return (
    
    <div>
      <Header/>
      
      <p className='main'>Accessories</p>
      <p className='main1'><Link to='/'>HOME</Link>  <FaAngleRight /> <Link to="/gift">Accessories  </Link> </p>

      <div className="men">
        {
          data && data.map(record =>{
            return(
              <div className="box" key={record.id} >
                <div className="imgage">
                  <img src={record.image} alt=""  />
                  <div className="overlay">
                  <IoCartOutline/>
                  <IoEyeOutline/>
                </div>
                <div className="overlay2">
                  <Link to={`/productacc/${record.id}`}><p>VIEW MORE</p></Link>
                </div>
                </div>
                <div className="informations">
                  <div className="title"><h2>{record.title}</h2> </div>
                  <div className="ratings">
                    <div className="stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                    </div>
                      ({record.reviews} Reviwes) 
                    </div>
                  <div className="price">{record.price}</div>
                </div>
                
              </div>
            )
          })
        }
      </div>
      <Footer/>
      </div>
  )
}

export default GistWoucher