
import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import "../componentStyle/verticalSlider.css"

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      }
    };

    const sliderImges = [

      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.dQgcajStX5.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.dQgcajStX5.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.dQgcajStX5.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.dQgcajStX5.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.dQgcajStX5.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.dQgcajStX5.webp"
    ]



    return (
      <div>
        <h2>Vertical Mode</h2>
        <Slider {...settings}>
          {
            sliderImges.map((images, index) => {
              return (
                <>
                <div className="verticalSlider align-items-center ">
                  <Image src={images} />
                  <p className="p-3 ">Veg and Meat</p> <br/>
                  <p className="p-3 ">$12</p> 
                 
                </div>
                
                </>
              )
            })

          }
        </Slider>
      </div>
    );
  }
}
{/* <div className="verticalSlider">
<img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
<p>Potatoes</p>
<p>$30</p>
</div>
<div className="verticalSlider">
<img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
<p>Potatoes</p>
 </div>
<div className="verticalSlider">
<img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
<p>Potatoes</p>
 </div>
<div className="verticalSlider">
<img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
<p>Potatoes</p>
 </div>
<div className="verticalSlider">
<img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
<p>Potatoes</p>
 </div>
<div className="verticalSlider">
<img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
<p>Potatoes</p>
 </div> */}