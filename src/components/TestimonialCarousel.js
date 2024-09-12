import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const imgblog = [
  { image: "/assets/images/testimonials/man.png" },
  { image: "/assets/images/testimonials/woman.png" },
  { image: "/assets/images/main/aisef2.jpg" },
];

const TestimonialCarousel = () => {
  const settings = {
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider
      className="testimonial-box center-active-owl item-center owl-loaded owl-carousel owl-none  owl-dots-black-full"
      {...settings}
    >
      <div className="item">
        <div className="testimonial-8">
          <div className="testimonial-text">
            <p>
              Event nya sangat menyenangkan, saya merasakan feel yang sangat
              senang sekali, terima kasih IYSA telah menyelenggarakan aisef.
            </p>
          </div>
          <div className="testimonial-detail clearfix">
            <div className="testimonial-pic radius shadow">
              <Image
                src={imgblog[0].image}
                width={100}
                height={100}
                alt="Testimonial 1"
              />
            </div>
            <h5 className="testimonial-name m-t0 m-b5">M. Thamrin</h5>
            <span>Participant</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="testimonial-8">
          <div className="testimonial-text">
            <div className="video-testimonial">
              <Image
                src={imgblog[2].image}
                width={100}
                height={100}
                alt="Video Testimonial"
              />
              <div className="video-testimonial-play">
                <a
                  href="https://drive.google.com/file/d/1dmxvyfYY4JMPz198YqvuB0-rvb5qFFQH/view?usp=sharing"
                  className="popup-youtube video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="testimonial-detail clearfix">
            <div className="testimonial-pic radius shadow">
              <Image
                src={imgblog[1].image}
                width={300}
                height={100}
                alt="Testimonial 2"
              />
            </div>
            <h5 className="testimonial-name m-t0 m-b5">Dias</h5>
            <span>Participant</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="testimonial-8">
          <div className="testimonial-text">
            <p>
              Sangat bagus, tetap semangat IYSA untuk kedepannya, Terima kasih
              juga semoga aisef tahun depan bisa ikut lagi.
            </p>
          </div>
          <div className="testimonial-detail clearfix">
            <div className="testimonial-pic radius shadow">
              <Image
                src={imgblog[0].image}
                width={100}
                height={100}
                alt="Testimonial 3"
              />
            </div>
            <h5 className="testimonial-name m-t0 m-b5">Dwi</h5>
            <span>Participant</span>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialCarousel;
