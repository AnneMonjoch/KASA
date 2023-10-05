import { useState } from "react";
import left from "../../assets/images/arrow-left.svg";
import right from "../../assets/images/arrow-right.svg";
import LazyLoad from "react-lazyload";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const slidesLength = slides.length;

  const previousSlide = () => {
    setCurrent(current === 0 ? slidesLength - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slidesLength - 1 ? 0 : current + 1);
  };

  return (
    <div className="carousel">
      {/* Utilisez LazyLoad pour envelopper chaque image */}
      <img
        className={slidesLength === 1 ? "none" : "left arrow"}
        onClick={previousSlide}
        src={left}
        alt="précédent"
      />
      {slides.map((slide, index) => (
        <div key={index} className={index === current ? "carouselActive" : "carouselInactive"}>
          {index === current && (
            <LazyLoad height={200} offset={100}> {/* Utilisez LazyLoad ici */}
              <img className="carouselSlide" src={slide} alt="img-appartement" />
            </LazyLoad>
          )}
          {index === current && slidesLength > 1 && (
            <span className="carouselPagination">{current + 1}/{slidesLength}</span>
          )}
        </div>
      ))}
      <img
        className={slidesLength === 1 ? "none" : "right arrow"}
        onClick={nextSlide}
        src={right}
        alt="suivant"
      />
    </div>
  );
}

export default Carousel;