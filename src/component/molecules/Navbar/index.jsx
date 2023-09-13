import NavItem from "../../atoms/NavItem"; 
import React from "react";
const Navbar=()=>{
    return(
        <div>
        <div className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Floral Fancies</a>
              <a class="navbar-brand" href="#">
                <img src="C:\Users\DELL\Downloads\Free Vector _ Blooming round floral frame.jpg" alt="F&F" width="30" height="24"></img>
                
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                <ul className="navbar-nav mr-auto"> 
                  <NavItem name={'Home'} path={'/'} />
                  <NavItem name={'Shop'} path={'/shop'} />
                  <NavItem name={'Wedding & Events'} path={'/'} />
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
  
  export default Navbar;