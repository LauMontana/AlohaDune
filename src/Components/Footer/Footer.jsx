import React from "react";
import "./footer.css";
import MapContainer from "./MapContainer";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-wrapper">
        <div className="left-footer">
          <MapContainer />
        </div>

        <div className="center-container">
          <i className="bx bxs-phone">
            <span>+57 601 6 85 17 11</span>
          </i>

          <i class="bx bxs-envelope">
            <span>info@alohadune.com</span>
          </i>

          <i class="bx bx-map">
            <span>Calle 7 # 29c - 29, Bogota D.C</span>
          </i>

          <div className="copy-rights">
            <p className="foot-note">
              Laura Montana &copy;{new Date().getFullYear()}&nbsp;
            </p>
          </div>
        </div>

        <div className="right-footer">
          <h1>Newsletter</h1>
          <p>
            Inscribete a nuestra newsletter para recibir novedades sobre la
            tienda.
          </p>
          <div className="social-media">
            <i className="bx bxl-facebook-square"></i>

            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
