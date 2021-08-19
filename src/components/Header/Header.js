import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import banner from '../../assets/images/banner/banner.svg';
import { HeaderStyle } from './HeaderStyle';
import { BiSearchAlt } from "react-icons/bi"

const slides = [
    { title: "Temuriylar davri adabiyoti" },
    { title: "Chet el adabiyotlari" },
    { title: "Asaxiy books" },
    { title: "O'zbekiston tarixi va adabiyoti" },
  ];

  export default function Header({ visibleSearch, searchDataHander }) {
    const settings = {
      dots: true,
      accessibility: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    const searchHandler = (e) => {
      e.preventDefault();
      e.target[0].value.length
        ? searchDataHander(e.target[0].value)
        : searchDataHander("");
    };
    console.log(slides);
    return (
      <HeaderStyle className="auto-container header">
        <Slider className="header-banner" {...settings}>
          {slides.map((item) => (
            <div key={item} className="header-banner-item">
              <h1 className="content">{item.title}</h1>
              <img src={banner} alt="banner" />
            </div>
          ))} 
        
        </Slider>
  
        { (
          <form className="header-search" onSubmit={searchHandler}>
            <h1 className="header-search-title">Qidirish</h1>
            <input
              type="text"
              className="header-search-input"
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
            />
            <button className="header-search-btn">
              <BiSearchAlt />
              Izlash
            </button>
          </form>
        )}
      </HeaderStyle>
    );
  }