import React, { Component } from "react";
import Slider from "react-slick";
import card1 from "../assets/images/blog1.jpg"
// import card1 from "E:/React js/Classes/secondproject/src/assets/images/blog1.jpg"
import card2 from "../assets/images/blog2.jpg"
import card3 from "../assets/images/blog3.jpg"
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          <div>
           <img style={{ width: '18rem' }} src={card1} />
          </div>
          <div>
          <img style={{ width: '18rem' }} src={card2} />
          </div>
          <div>
          <img style={{ width: '18rem' }} src={card3} />
          </div>
          <div>
          <img style={{ width: '18rem' }} src={card1} />
          </div>
          <div>
          <img style={{ width: '18rem' }} src={card2} />
          </div>
          <div>
          <img style={{ width: '18rem' }} src={card3} />
          </div>
          <div>
          <img style={{ width: '18rem' }} src={card1} />
          </div>
          <div>
          <img style={{ width: '18rem' }} src={card2} />
          </div>
        </Slider>
      </div>
    );
  }
}