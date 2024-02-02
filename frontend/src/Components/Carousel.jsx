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
                src="/img/img_1.jpg"
                className="d-block w-100 img-fluid"
                alt="image 1"
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h3>Step Into Style</h3>
              <p>
              Find your stride with our latest footwear collection. Where comfort meets chic.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container-carousel">
            <div className="overlay-image">
              <img
                src="/img/img_2.jpg"
                className="d-block w-100 img-fluid"
                alt="image 2"
              />
            </div>

            <div className="carousel-caption d-none d-md-block">
              <h3>Season's Must-Haves</h3>
              <p>
              Refresh your wardrobe with our selection of this season's trending styles.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container-carousel">
            <div className="overlay-image">
              <img
                src="/img/img_3.jpg"
                className="d-block w-100 img-fluid"
                alt="image 3"
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h3>Everyday Luxury</h3>
              <p>
              Experience everyday elegance with our premium casual wear line.
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
