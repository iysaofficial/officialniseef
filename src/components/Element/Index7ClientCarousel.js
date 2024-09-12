import React, { Component } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const logo1 = '/assets/images/client-logo/iysa-white.png';
const logo2 = '/assets/images/client-logo/undip.png';
const logo3 = '/assets/images/client-logo/iysa-white.png';
const logo4 = '/assets/images/client-logo/undip.png';

const imgblog = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
  { image: logo2 },
];

class Index7ClientCarousel extends Component {
  render() {
    var settings = {
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      autoplay: true,
      speed: 2000,
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
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 591,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    return (
      <Slider
        className="img-carousel owl-carousel owl-none"
        {...settings}
      >
        {imgblog.map((item, index) => (
          <div className="item" key={index}>
            <div className="client-logo text-center">
              <Image src={item.image} alt="" width={100} height={100} />
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default Index7ClientCarousel;