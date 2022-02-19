import React from "react";
import Logo from "../Img/AlohaLogoCut.png";
import Phone from "../Img/bxs-phone.svg";
import Location from "../Img/bx-current-location.svg";
import './navbar.css';

function Nabvar() {
  return (
    <div className="Navbar">
      <div className="wrapper">


        <div className="navbar-left">
          <a href="#Intro" className="Logo">
            <img src={Logo} alt="Logo" />
          </a>
        </div>


        <div className="navbar-right">

          <div className="container">
          <i class='bx bxs-phone'></i>
            <span>+57 601 6 85 17 11</span>
          </div>

          <div className="container address">
          <i class='bx bx-current-location'></i>
            <span>Calle 7 # 29c - 29, Bogota D.C</span>
          </div>

          <div className="hamburger">
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
