import React from "react";
import Logo from "../Img/AlohaLogoCut.png";
import './navbar.css';

function Nabvar({menuAbierto, setMenuAbierto}) {
  return (
    <div className={"topbar " + (menuAbierto && "active")}>
      <div className="wrapper">


        <div className="navbar-left">
          <a href="#Intro" className="logo">
            <img src={Logo} alt="logo" />
          </a>
        </div>


        <div className="navbar-right">

          <div className="container">
          <i className='bx bxs-phone'></i>
            <span>+57 601 6 85 17 11</span>
          </div>

          <div className="container address">
          <i class='bx bx-map'></i>
            <span>Calle 7 # 29c - 29, Bogota D.C</span>
          </div>

          <div className="hamburger" onClick={() => setMenuAbierto(!menuAbierto)}>
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="linea"></span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Nabvar;
