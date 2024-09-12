import React from "react";

const Categories = () => {
  const settings = {
    arrows: false,
    slidesToShow: 4,
    speed: 1500,
    navSpeed: 1500,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

    <section className="categories-section">
      <div className="categories-container">
      <div className="categories-item p-1">
        <div className="box-item-service text-center">
          <div className="item-service-content m-b40">
            <h5>Entrepreneur</h5>
            <div className="icon-bx-md radius border-1 m-t40 m-b20">
              <span className="icon-cell">
                <i className="fas fa-briefcase"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="box-item-service text-center">
          <div className="item-service-content m-b40">
            <h5>Social Science</h5>
            <div className="icon-bx-md radius border-1 m-b20 m-t0">
              <span className="icon-cell">
                <i className="fas fa-users"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="box-item-service text-center">
          <div className="item-service-content m-b40">
            <h5>Environmental Science</h5>
            <div className="icon-bx-md radius border-1 m-t40 m-b20">
              <span className="icon-cell">
                <i className="fas fa-leaf"></i>{" "}
                {/* Environmental Science icon */}
              </span>
            </div>
          </div>
        </div>
        <div className="box-item-service text-center">
          <div className="item-service-content m-b40">
            <h5>Innovation Science</h5>
            <div className="icon-bx-md radius border-1 m-b20 m-t0">
              <span className="icon-cell">
                <i className="fas fa-lightbulb"></i>{" "}
                {/* Innovation Science icon */}
              </span>
            </div>
          </div>
        </div>
        <div className="box-item-service text-center">
          <div className="item-service-content m-b40">
            <h5>Cluster Mechanical and Shipping</h5>
            <div className="icon-bx-md radius border-1 m-t40 m-b20">
              <span className="icon-cell">
                <i className="fas fa-cogs"></i> {/* Mechanical icon */}
              </span>
            </div>
          </div>
        </div>
        <div className="box-item-service text-center">
          <div className="item-service-content m-b40">
            <h5>Industrial Application</h5>
            <div className="icon-bx-md radius border-1 m-b20 m-t0">
              <span className="icon-cell">
                <i className="fas fa-industry"></i> {/* Industrial icon */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Categories;
