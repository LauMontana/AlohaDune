import React from 'react';
import './menu.css';


function Menu({menuAbierto, setMenuAbierto}) {
  return (
    <div className={"menu " + (menuAbierto && "active")}>
        <ul className='menu-container'>
            <li className="menu-item" onClick={() => setMenuAbierto(false)}>
                <a href="#intro" className="opc-menu" > Inicio </a>
            </li>

            <li className="menu-item" onClick={() => setMenuAbierto(false)}>
                <a href="#bienvenido" className="opc-menu"> Bienvenido </a>
            </li>

            <li className="menu-item" onClick={() => setMenuAbierto(false)}>
                <a href="#productos" className="opc-menu"> Productos </a>
            </li>

            <li className="menu-item" onClick={() => setMenuAbierto(false)}>
                <a href="#empresa" className="opc-menu"> Acerca de nosotros </a>
            </li>
        </ul>
    </div>
  )
}

export default Menu