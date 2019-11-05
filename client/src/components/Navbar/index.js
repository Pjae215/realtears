import React from "react";


function NavigationBar () {
      return(

      
<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
      <h2 className="navbar-brand">CHIVALRY</h2>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href='/SignIn'>SignIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href= '/SignUp'>SignUp</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  ); 
      };
  
export default NavigationBar;


