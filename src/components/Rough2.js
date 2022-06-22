// import React, { Component, useState } from "react";
// import Slider from "react-slick";

// import card1 from "E:/React js/Classes/secondproject/src/assets/images/blog1.jpg"
// import card2 from "E:/React js/Classes/secondproject/src/assets/images/blog2.jpg"
// import card3 from "E:/React js/Classes/secondproject/src/assets/images/blog3.jpg"
// export default class VerticalMode extends Component {
//     // state = {
//     //     display: true,
//     //     width: 600
//     //   };
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       vertical: true,
//       verticalSwiping: true,
//       beforeChange: function(currentSlide, nextSlide) {
//         console.log("before change", currentSlide, nextSlide);
//       },
//       afterChange: function(currentSlide) {
//         console.log("after change", currentSlide);
//       }
//     };
//     // const [images, setImages] =useState([]);
//     const sliderImges=[
      
//       "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp",
//       "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.dQgcajStX5.webp",
//         "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.dQgcajStX5.webp"
    
//     ]
//     return (
//       <div>
//         <h2>Vertical Mode</h2>
//         <Slider {...settings}>
//         <div>
//           {
//             sliderImges.map((items)=>{
//               return <img style={{ width: '18rem' }} src={items} />
//             })
//           }
//           </div>
//           {/* <div>
//           <img style={{ width: '18rem' }} src={card2} />
//           </div>
//           <div>
//           <img style={{ width: '18rem' }} src={card3} />
//           </div>
//           <div>
//           <img style={{ width: '18rem' }} src={card1} />
//           </div>
//           <div>
//           <img style={{ width: '18rem' }} src={card2} />
//           </div>
//           <div>
//           <img style={{ width: '18rem' }} src={card3} />
//           </div>
//           <div>
//           <img style={{ width: '18rem' }} src={card1} />
//           </div>
//           <div>
//           <img style={{ width: '18rem' }} src={card2} />
//           </div> */}
//         </Slider>
       
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import Slider from "react-slick";

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };

    // const sliderImges=[
      
    //         "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp",
    //         "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.dQgcajStX5.webp",
    //         "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.dQgcajStX5.webp",
    //         "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.dQgcajStX5.webp",
    //         "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.dQgcajStX5.webp",
    //         "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.dQgcajStX5.webp"
    //       ]
      
    
    const products=[
      {
        image:"https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp",
        pName:`product ${getRandomNumbers(1,6)}`,
        price:`Price ${getRandomNumbers(100,500)}`
      },
      {
        image:"https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp",
        pName:`product ${getRandomNumbers(1,6)}`,
        price:`Price ${getRandomNumbers(100,500)}`
      },
      {
        image:"https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp",
        pName:`product ${getRandomNumbers(1,6)}`,
        price:`Price ${getRandomNumbers(100,500)}`
      },
      {
        image:"https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp",
        pName:`product ${getRandomNumbers(1,6)}`,
        price:`Price ${getRandomNumbers(100,500)}`
      },
      {
        image:"https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp",
        pName:`product ${getRandomNumbers(1,6)}`,
        price:`Price ${getRandomNumbers(100,500)}`
      },
      {
        image:"https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp",
        pName:`product ${getRandomNumbers(1,6)}`,
        price:`Price ${getRandomNumbers(100,500)}`
      }
    ]
    function getRandomNumbers(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
    return (
      <div>
        <h2>Vertical Mode</h2>
        <Slider {...settings}>
          <div>
          {
            products.map((product)=>{
              return(
                <div>
                <img src={product.image} />
                <p>{product.pName}</p>
                <p>{product.price} </p>
                </div>
              )
            })
          }
          </div>
          {/* <div>
          <img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
          </div>
          <div>
          <img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
          </div>
          <div>
          <img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
          </div>
          <div>
          <img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
          </div>
          <div>
          <img src="https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.NOJHmb0hZw.webp" />
          </div> */}
        </Slider>
      </div>
    );
  }
}