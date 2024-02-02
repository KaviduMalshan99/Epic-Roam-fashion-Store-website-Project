import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTiktok } from "react-icons/bi";
import { MdOutlineCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footertop">
            Connect With us : 
            <div className="icons">
                <CiFacebook />
                <IoLogoInstagram />
                <BiLogoTiktok />
            </div>
            
        </div>

        <div className="footerbottom">

            <div className="fbsec1">
                Epic Rome
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae culpa dolorem ratione. Deserunt fugit corporis placeat, atque possimus voluptas eligendi!</p>
            </div>

            <div className="fbsec2">
                <h3>COLLECTION</h3>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/men'>Men</Link></li>
                    <li> <Link to='/women'>Women</Link></li>
                    <li> <Link to='/gift'>Gift Woucher</Link> </li>
                </ul>
            </div>

            <div className="fbsec3">
                <h3>INFO</h3>
                <ul>
                    <li> <Link to='/about'>Abouth Us</Link></li>
                    <li> <Link to='/carrias'>Carrias</Link></li>
                    <li> <Link to='/privacy'>Privacy policy</Link></li>
                    <li> <Link to='/return'>Returns & Refund</Link></li>
                    <li> <Link to='/affliate'>Affliate</Link></li>
                </ul>

            </div>

            <div className="fbsec4">
                <h3>CONNECT</h3>

                <div className='fbcIcons'>
                    <div className="fcbs">
                        <MdOutlineCall/>0719707610
                    </div>

                    <div className="fcbs">
                     <BiLogoGmail/>EpicRoam@gmail.com
                    </div>

                    <div className="fcbs">
                        <FaGoogle/>www.EpicRome.com
                    </div>
                    
                </div>

                <input type="text" placeholder='Enter Email' className='input1'/>
                <FaAnglesRight className='rightsubmit'/>
                
            </div>

        </div>

        <div className="footerdoublebootom">
         © Epic Roam 2023 | All rights reserved <br />
         Developed by <a href="">Kavidu M Kulathunga</a>
        </div>

    </div>
  )
}

export default Footer