import React from "react";
import "./productos.css";
import denim from "../Img/denin.jpg";
import him from "../Img/forMan.jpg";
import lana from "../Img/lana.jpg";
import lounge from "../Img/lounge.jpg";
import kids from "../Img/clothes4.jpg";
import woman from "../Img/clothesw.jpg";

function Productos() {
  return (
    <div className="product-container" id="productos">
      <h1>Productos</h1>

      <div className="contenedor-galeria">

        <div className="row-categorias">

        {/* Imagen 1 */}
        <div className="imagen">
          <img src={woman} alt="woman" className="img-galeria" />
          <div className="detalles overlay">
            <h2 className="titulo-categoria">MUJERES</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="more">
              <a href="#/" className="read-more">
                <span>Detalles</span>
              </a>
              <div className="icon-links">
                <a href="#/">
                  <i className="bx bx-show"></i>
                </a>
                <a href="#/">
                  <i className="bx bx-purchase-tag-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen 2 */}
        <div className="imagen">
          <img src={him} alt="men" className="img-galeria" />
          <div className="detalles overlay">
            <h2 className="titulo-categoria">HOMBRES</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="more">
              <a href="#/" className="read-more">
                <span>Detalles</span>
              </a>
              <div className="icon-links">
                <a href="#/">
                  <i className="bx bx-show"></i>
                </a>
                <a href="#/">
                  <i className="bx bx-purchase-tag-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen 3 */}
        <div className="imagen">
          <img src={kids} alt="kids" className="img-galeria" />
          <div className="detalles overlay">
            <h2 className="titulo-categoria">NIÑOS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="more">
              <a href="#/" className="read-more">
                <span>Detalles</span>
              </a>
              <div className="icon-links">
                <a href="#/">
                  <i className="bx bx-show"></i>
                </a>
                <a href="#/">
                  <i className="bx bx-purchase-tag-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>

        <div className="row-categorias">

{/* Imagen 4 */}
<div className="imagen">
  <img src={lounge} alt="loungewear" className="img-galeria" />
  <div className="detalles overlay">
    <h2 className="titulo-categoria">LOUNGEWEAR</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    <div className="more">
      <a href="#/" className="read-more">
        <span>Detalles</span>
      </a>
      <div className="icon-links">
        <a href="#/">
          <i className="bx bx-show"></i>
        </a>
        <a href="#/">
          <i className="bx bx-purchase-tag-alt"></i>
        </a>
      </div>
    </div>
  </div>
</div>

{/* Imagen 5 */}
<div className="imagen">
  <img src={lana} alt="wool" className="img-galeria" />
  <div className="detalles overlay">
    <h2 className="titulo-categoria">FIBRAS NATURALES</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    <div className="more">
      <a href="#/" className="read-more">
        <span>Detalles</span>
      </a>
      <div className="icon-links">
        <a href="#/">
          <i className="bx bx-show"></i>
        </a>
        <a href="#/">
          <i className="bx bx-purchase-tag-alt"></i>
        </a>
      </div>
    </div>
  </div>
</div>

{/* Imagen 6 */}
<div className="imagen">
  <img src={denim} alt="denin" className="img-galeria" />
  <div className="detalles overlay">
    <h2 className="titulo-categoria">DENIM</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    <div className="more">
      <a href="#/" className="read-more">
        <span>Detalles</span>
      </a>
      <div className="icon-links">
        <a href="#/">
          <i className="bx bx-show"></i>
        </a>
        <a href="#/">
          <i className="bx bx-purchase-tag-alt"></i>
        </a>
      </div>
    </div>
  </div>
</div>

</div>



      
    </div>
    </div>
  );
}

export default Productos;
