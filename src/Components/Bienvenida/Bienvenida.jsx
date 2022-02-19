import React from "react";
import "./bienvenida.css";
import model from "../Img/model.jpg";

function Bienvenida() {
  return (
    <div className="welcome-container" id="bienvenido">
      <div className="titulo">
        <h1>Bienvendio</h1>
      </div>

      <div className="warpper">
        <div className="left">
          <img src={model} />
        </div>

        <div className="right">
          <div className=" text">
            <p>
           
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              error placeat quam, dicta illum esse a aut excepturi, deserunt
              consequatur eligendi. Impedit neque enim corporis alias sapiente
              sequi veniam sit? Dicta placeat rerum iure! Quo magni voluptate
              minima odit dignissimos, provident nulla quam itaque quidem
              laborum, at accusantium fugit. Debitis dolor enim unde error omnis
              eos odio cupiditate esse ea. Sed nulla nihil voluptatibus
              explicabo laborum sequi inventore reprehenderit illo rem, corrupti
              aspernatur saepe, cumque dolore totam officia iste, earum quam
              corporis odio quisquam asperiores. Eum aliquam necessitatibus
              numquam repudiandae. Molestiae facere impedit vitae unde.
  
            </p>
          </div>

          <button>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;
