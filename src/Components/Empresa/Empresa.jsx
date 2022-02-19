import React from "react";
import "./empresa.css";
import fabrics from "../Img/fabrics.jpg";
import confeccion from "../Img/tailoring.jpg";
import organico from "../Img/organic.jpg";

function Empresa() {
  return (
    <div className="empresa-container" id="empresa">
      <h1>Empresa </h1>
      <div className="wrapper-elements">
        <div className="derecho">
          <div className="card">
            <figure>
              <img src={fabrics} alt="Telas" />
            </figure>
            <div className="content">
              <h3>Fibras</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                corporis accusamus assumenda quod maiores iure facere, debitis
                iste laboriosam, enim, minus blanditiis vero at architecto
                asperiores laborum adipisci soluta commodi.
              </p>
              <a href="#">Leer Más</a>
            </div>
          </div>
        </div>

        <div className="centro">
          <div className="card">
            <figure>
              <img src={confeccion} alt="Telas" />
            </figure>
            <div className="content">
              <h3>Tailoring</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                corporis accusamus assumenda quod maiores iure facere, debitis
                iste laboriosam, enim, minus blanditiis vero at architecto
                asperiores laborum adipisci soluta commodi.
              </p>
              <a href="#">Leer Más</a>
            </div>
          </div>
        </div>

        <div className="izquierdo">
          <div className="card">
            <figure>
              <img src={organico} alt="Telas" />
            </figure>
            <div className="content">
              <h3>Tegidos organicos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                corporis accusamus assumenda quod maiores iure facere, debitis
                iste laboriosam, enim, minus blanditiis vero at architecto
                asperiores laborum adipisci soluta commodi.
              </p>
              <a href="#">Leer Más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empresa;
