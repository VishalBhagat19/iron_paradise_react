import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top nav1" >
 <div className="container-fluid">
    <Link href="" className="navbar-brand">

      <img src="img/paradise_logo.png" width="70px" className="img-fluid" alt="logo"/>
    </Link>
     <button className="navbar-toggler"data-bs-toggle="collapse" 
    data-bs-target="#a">
      <span className="navbar-toggler-icon"></span>
     </button>
     
    <div className="collapse navbar-collapse" id="a"> 
      <ul className="navbar-nav ms-auto">
      <li><Link to="" className="nav-link menu">HOME</Link></li>
      
      <li><Link to="about" className="nav-link menu">ABOUT</Link></li>
      <li><Link to="gallery" className="nav-link menu">GALLERY</Link></li>
      <li><Link to="class" className="nav-link menu">CLASSES</Link></li>
      <li><Link to="register" className="nav-link btn btn-warning  " >REGISTER</Link></li>
       </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header