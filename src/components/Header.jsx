import  { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import "../components/Header.css";


const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false); // Declare a state variable to toggle search input visibility

  const handleSearchButtonClick = () => {
    setShowSearchInput((prevState) => !prevState); // Toggle the state of search input visibility
  };

  return (
    <div>
      <div className="top">
        Get Upto 5000 Get 10% OFF!
      </div>

      <div className="bottom">
        <div className="sec1">
          <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/men'>Men</Link>
            </li>
            <li>
                <Link to='/women'>Women</Link>
            </li>
            <li>
                 <Link to='/gift'>Accessories</Link>
            </li>
          </ul>
        </div>

        <div className="sec2">
          <a href="#">Epic Roam</a>
        </div>

        <div className="sec3">
          
          {showSearchInput && ( 
            <input
              type="text"
              placeholder="Type for Search.."
              className="search"
            />
          )}

          <IoMdSearch onClick={handleSearchButtonClick} />
          <Link to='/login' ><MdOutlineAccountCircle className="icon2"/></Link>
          <Link to='/cart'><IoCartOutline className="icon3"/></Link>

        </div>
      </div>
    </div>
  );
};

export default Header;
