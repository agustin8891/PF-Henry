import React, { useState } from 'react'
import { DataImage } from './DataImages';
import './carousel.css'
import { useSelector } from "react-redux";
import StarRating from "../StarRatings/index";
import { Link } from "react-router-dom";

const Carousel = () => {

  const [currentNomada,setCurrentNomada] = useState(0);
  const lengthArray = 5
  const { packages } = useSelector((state) => state.rootReducer);
  const [current, setCurrent] = useState(0);
  const length = DataImage.length;
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  let array=[]

    //los paquetes ya están ordenados por fecha en packages
  for (let i=6; i<11; i++ ) {
    array.push(packages[i])
  }

  console.log("array carrusel", array)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  React.useEffect(() => { timeOut = autoPlay && setTimeout(() => { nextSlide(); }, 3000) })
  if (!Array.isArray(DataImage) || DataImage.length <= 0) {
    return null;
  }





  const nextSlideNomada = () =>{
    setCurrentNomada(currentNomada === lengthArray-1 ? 0 : currentNomada +1);
}

const prevSlideNomada = () =>{
    setCurrentNomada(currentNomada === 0 ? lengthArray-1 : currentNomada-1);
}

let arrayNomada=[]



  return (
/*     <section className='slider' >
 

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {array.map((e)=>{ return ( <div class="carousel-item active">
  {<img src={e?.city.image} class="d-block w-100" alt="..."/>}
</div>)
 })
    }
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    </section> */


<div className="containerAll">
          <div className="containerImgArrowsText">

                            <div class="containerArrow">
                                <button className="buttonNextPrevious" onClick={() => nextSlideNomada()}>{/* nextSlideNomada */}
                                    <ion-icon name="chevron-back-outline"></ion-icon>
                                </button>
                            </div>
                  <Link to={`/details/${array[currentNomada]?.id}`}>
                            <div className="containerImgText">                  

                                    <div className="containerImg">
                                            <img src={array[currentNomada]?.city.image} className="classImagenActual" alt="imagen"  />
                                    </div>

                                    <div className="ContainerTextCard">
                                        <h2>{array[currentNomada]?.name}</h2>

                                        <p class="card-text salida">
                                            Salida:{" "}
                                            {new Date(array[currentNomada]?.start_date).toLocaleString("es-ES")}
                                            </p>
                                            <p class="card-text llegada">
                                              Llegada:{" "}
                                              {new Date(array[currentNomada]?.end_date).toLocaleString("es-ES")}
                                            </p>
                                            <h4 class="hotelClass">Hotel: {array[currentNomada]?.hotel.name}</h4>
                                        <h5>
                        {array[currentNomada]?.hotel.wifi ? (
                          <span class="material-symbols-outlined">wifi</span>
                        ) : null}{" "}
                        {array[currentNomada]?.hotel?.pool ? (
                          <span class="material-symbols-outlined">pool</span>
                        ) : null}
                        {array[currentNomada]?.hotel?.gym ? (
                          <span class="material-symbols-outlined">fitness_center</span>
                        ) : null}
                      </h5>
                      <h5 className="card-title star">
                        <StarRating stars={array[currentNomada]?.hotel?.stars} />
                      </h5>


                                        <div className="ContainerTextCardDown">
                                            <h4 class="card-title">Precio por persona: $ {array[currentNomada]?.price} </h4>
                                            <h3 class="card-text price-det"></h3>
                                            <p>Incluye precios, tasas y cargos</p>
                                        </div>
                                  </div>
                            </div>  
                  </Link>



                        <div class="containerArrow">
                          <button className="buttonNextPrevious" onClick={() => prevSlideNomada()}>
                                      <ion-icon name="chevron-forward-outline"></ion-icon>
                          </button>
                </div>

          </div>
    </div>
  )
}

export default Carousel