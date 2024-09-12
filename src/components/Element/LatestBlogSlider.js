import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

//Images
const pic1 = "/assets/images/blog/grid/pic1.jpg";
const pic2 = "/assets/images/blog/grid/pic2.jpg";
const pic3 = "/assets/images/blog/grid/pic3.jpg";
const pic4 = "/assets/images/blog/grid/pic4.jpg";

const contentBlog = [
  {
    images: pic1,
    title: "Latest product, full of marvelous features and functionality",
  },
  {
    images: pic2,
    title: "Design a perfect website according to your need and desire",
  },
  {
    images: pic3,
    title: "Best suited website and smart choice for your online business.",
  },
  {
    images: pic4,
    title: "Design a creative website with perfection and smart technology",
  },
  {
    images: pic2,
    title: "Design a perfect website according to your need and desire",
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div className="owl-next flaticon-right-arrow" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div
        className=" owl-prev flaticon-left-arrow"
        onClick={onClick}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

class LatestBlogSlider extends Component {
  render() {
    var settings = {
      arrows: true,
      slidesToShow: 4,
      infinite: true,
      dots: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
      <>
        <Slider
          className="dots-style-center img-carousel owl-carousel owl-btn-center-lr owl-btn-3 "
          {...settings}
        >
          {contentBlog.map((item, index) => (
            <div className="item p-3" key={index}>
              <div className="blog-post blog-grid blog-rounded blog-effect1">
                <div className="dlab-post-media dlab-img-effect ">
                  {" "}
                  <Link to={"#"}>
                    <Image src={item.images} alt="" width={100} height={100}/>
                  </Link>{" "}
                </div>
                <div className="dlab-info p-a20 border-1">
                  <div className="dlab-post-title ">
                    <h5 className="post-title font-weight-500">
                      <Link to={"#"}>{item.title}</Link>
                    </h5>
                  </div>
                  <div className="dlab-post-meta ">
                    <ul>
                      <li className="post-date">
                        {" "}
                        <i className="fa fa-comments"></i>
                        <strong>10 Aug</strong> <span> 2016</span>{" "}
                      </li>
                      <li className="post-author">
                        <i className="fa fa-user"></i>By{" "}
                        <Link to={"#"}>Jone</Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-post-text">
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat..
                    </p>
                  </div>
                  <div className="dlab-post-readmore">
                    <Link
                      to={"#"}
                      title="READ MORE"
                      rel="bookmark"
                      className="site-button-link black outline"
                    >
                      READ MORE
                      <i className="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}

export default LatestBlogSlider;
