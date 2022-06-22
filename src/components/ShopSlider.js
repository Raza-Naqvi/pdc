import React, { Component } from "react";
import Slider from "react-slick";
import "../componentStyle/shopSlider.css"

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    
    

    const shopSlider=[
        "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-1.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-2.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-3.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-4.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-5.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-6.jpg",
       
    ]
    function getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    return (
      <div>
        <h1> <b>Sale Off</b> </h1>
        <Slider {...settings} >
         {
             shopSlider.map((images)=>{
                 return (
                     <div className="sliderImages">
                         <img src={images}  />
                         <p className="text-center mt-3">{`Product ${getRandomNumbers(1,10)}`}</p>
                         <p className="text-center"><b>{`Price ${getRandomNumbers(100,500)}`}</b></p>
                     </div>
                 )
             })
         }
         
        </Slider>
      </div>
    );
  }
}