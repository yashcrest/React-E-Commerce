import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      {/* Carousel slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container-carousel">
            <div className="overlay-image">
              <img
                src="frontend/public/img/empty_cart.webp"
                className="d-block w-100 img-fluid"
                alt="image 1"
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h3>First slide label</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                placeat perferendis nesciunt ullam est magni suscipit illum
                error odit eveniet.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container-carousel">
            <div className="overlay-image">
              <img
                src="frontend/public/img/img_2.jpg"
                className="d-block w-100 img-fluid"
                alt="image 2"
              />
            </div>

            <div className="carousel-caption d-none d-md-block">
              <h3>Second slide label</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                fugit reprehenderit animi enim dolor delectus harum nemo
                eligendi totam necessitatibus!
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container-carousel">
            <div className="overlay-image">
              <img
                src="frontend/public/img/img_3.jpg"
                className="d-block w-100 img-fluid"
                alt="image 3"
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h3>Third slide label</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                est iusto placeat maxime, corporis officiis beatae rerum itaque.
                Libero, dolor?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* previous and next button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon d-none d-md-block"
          aria-hidden="true"
        ></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon d-none d-md-block"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
};

export default Carousel;
