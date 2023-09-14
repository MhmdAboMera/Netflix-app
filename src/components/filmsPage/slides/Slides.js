import "./slides.css";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Slides(props) {
  const carouselRef = useRef();
  const innercarouselRef = useRef();
  const itemRef = useRef();
  const [width, setwidth] = useState(0);
  useEffect(() => {
    setwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <div className="slides">
      <motion.div className="container">
        <motion.div id="carouselfilms" ref={carouselRef} className="carousel">
          <div className="text-info">
            <h2>{props.title}</h2>
            <a href="#">More</a>
          </div>
          <motion.div
            ref={innercarouselRef}
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {props.movie.map((img) => {
              return (
                <div className="item" key={img.id} ref={itemRef}>
                  <img src={img.image} alt={img.category} />
                  <Link to={`/films/${img.id}`} className="text-white-50">
                    {img.name}
                  </Link>
                </div>
              );
            })}
          </motion.div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselfilms"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselfilms"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
export default Slides;
