import React from 'react';
import p1 from '../Img/clothes1.png';
import p2 from '../Img/clothes2.png';
import p3 from '../Img/clothes3.png';
import './inicio.css';

function Inicio() {
  return (
    <div className="inicio-container" id="#inicio">
      <ul className='slider'>
        <li id="slide1">
          <img src={p1} alt='slide1'/>
        </li>
        <li id="slide2">
          <img src={p2} alt='slide1'/>
        </li>
        <li id="slide3">
          <img src={p3} alt='slide1'/>
        </li>
      </ul>
      <div className='menu-slider-container'>
      <ul className='menu-slide'>
        <li>
          <a href='#slide1' className='punto'></a>
        </li>
        <li>
          <a href='#slide2'className='punto'></a>
        </li>
        <li>
          <a href='#slide3'className='punto'></a>
        </li>

      </ul>
      </div>
      </div>
  )
}

export default Inicio

// const [slideActual, setSlideActual] = useState(0)

// const data = [
//   {
//     id: "1",
//     img: '../Img/clothes1.png'
//   },
//   {
//     id: "2",
//     img: {p2}
//   },
//   {
//     id:"3",
//     img: {p3}
//   }
// ];

// const handleClick = (way) => {
//   way === "left"
//     ? setSlideActual(slideActual > 0 ? slideActual - 1 : 2)
//     : setSlideActual(slideActual < data.length - 1 ? slideActual + 1 : 0);
// };

// return (
//   <div className='inicio-container' id='Intro'>
//     <div className='slider' style={ {transform: `translateX(-${slideActual* 100}vw)`}}>
//       {data.map((d)=>
//       <div className='slider-container'>
//         <div className='item-slider'>
//           <img src={d.img} alt='Picture' />

//         </div>
//       </div>
//        )}
//     </div>
//     <i className='bx bxs-chevron-left' onClick={()=>handleClick("left")} ></i>
//     <i className='bx bx-chevron-right' onClick={()=>handleClick("right")}></i>
//   </div>
// )


// import React, { useState } from "react";
// import { SliderData } from "./SiliderData";

// const Inicio = ({slides}) => {
//   const [actual, setActual] = useState(0);
//   const length   = slides.length ;

//   const siguienteSlide = () => {
//     setActual(actual === length - 1 ? 0 :  actual + 1 );
//   };

//   const anteriorSlide = () => {
//     setActual(actual === 0 ? length - 1 : actual -1 );
//   };
//   if(!Array.isArray(slides) || slides.length  <= 0){
//     return null;
//   }


//   return (

//     <section className="inicio-container" id="#inicio">
//       <i className="bx bxs-chevron-left" onClick={anteriorSlide}></i>
//       <i className="bx bxs-chevron-right" onClick={siguienteSlide}></i>
//       {SliderData.map((slide, index ) => {
//         return (
//           <div 
//           className={index === actual ? 'slide active' : 'slide'} 
//           key={index}>
//             {index === actual && (
//               <img src={slide.image} alt="promo" className="image" />
//             )}
//             </div>
//         );
//       })}
//     </section>
//   )
// }

// export default Inicio