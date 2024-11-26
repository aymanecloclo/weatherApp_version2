import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CardCarousel = ({ cards }) => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,  // For tablets or medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,  // For mobile screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <div className="w-full relative md:px-5  my-24  ">
      <h2 id="forecast" className="text-center text-3xl font-bold mb-8 text-white">Detailed Weather Conditions</h2>
      <Slider {...settings}>
        {cards.map((item, index) => (
          <div 
  key={index} 
  className="bg-gradient-to-r from-blue-400 to-indigo-00 overflow-hidden rounded-xl shadow-md dark:bg-gray-900 dark:text-white p-4 m-2 transform transition duration-300 hover:scale-105"
>
  <div className="flex items-center justify-between mb-2">
    <p className="text-xs tracking-widest uppercase bg-white bg-opacity-20 text-white py-1 px-2 rounded-md">
      {item.title}h
    </p>
    <img src={item.icon} className="w-10 h-10 object-cover" alt={`${item.title} icon`} />
  </div>
  <div className="text-center">
    <span className="text-3xl font-bold text-white">
      {item.value} {item.unit}
    </span>
  </div>
</div>

        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;