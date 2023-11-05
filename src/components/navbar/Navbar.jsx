import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import { AuthContext } from '../../context/AuthContext'
const Navbar = () => {
  const user= JSON.parse(localStorage.getItem("user"))
  console.log("loginuser",user)
  const { dispatch } = useContext(AuthContext);

  //*logoutfunction
  const handleLogOut=()=>{
    dispatch({ type: "LOGOUT" })
    // console.log("hello logut")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"} style={{color:"inherit", textDecoration:"none"}}> <span className="logo">lamabooking</span> </Link>
        <div className="navItems">
{ !user &&    <div className="authbutton">
        <Link to={"/register"}><button className="navButton">Register</button></Link>
        <Link to={"/login"}><button className="navButton">Login</button></Link>
        </div>}
{ user &&       <div className="others">
        <h3> {user.username}</h3>
        <button onClick={handleLogOut} className='navlogout'>Logout</button>
        </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar