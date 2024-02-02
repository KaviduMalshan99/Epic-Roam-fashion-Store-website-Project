
import Header from '../components/Header'
import Footer from '../components/Footer'

import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  return (
    <div>
      <Header/>
        <div className="loginpage">
          <p className='main'>LOGIN PAGE</p>
          <p className='main1'><Link to='/'>HOME</Link>  <FaAngleRight /> <Link to="/login">lOGIN  </Link> </p>



          <div className="logincontainer">

              <p>USER NAME : </p>
              <input type="text" name="" id="" placeholder='Enter Name..'/>
            
              <p>Password : </p>
              <input type="password" name="" id="" placeholder='Enter Password' />
            
            <button className='logbtn'>LogIn</button>

            <p className='reg'>Don't have an Account ? <Link to='/register'>Register Now</Link></p>
            
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Login