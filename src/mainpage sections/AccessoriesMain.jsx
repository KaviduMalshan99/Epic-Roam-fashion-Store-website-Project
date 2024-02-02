


import data from '../Data/Accessories.json'
import "../Pages/Men.css"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const AccessoriesMain = () => {
  return (
    <div>
        <p className='main'>Accessories</p>

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
      <div className="see">
        <Link to='/gift'><p className='para'>SEE MORE</p></Link>
      </div>
      
    </div>
  )
}

export default AccessoriesMain