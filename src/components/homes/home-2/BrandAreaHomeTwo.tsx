 
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const setting1 = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [{
    breakpoint: 500,
    settings: {
      slidesToShow: 2
    }
  }]
}

const setting2 = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  arrows: false,
  rtl: true,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [{
    breakpoint: 500,
    settings: {
      slidesToShow: 2
    }
  }]
}



export default function BrandAreaHomeTwo() {
  return (
    <div className="wionsection-padding bg-heading home-2-brand-slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="wiondefault-content content2">
              <div className="wionsub-title title2 aos-init" data-aos-delay="400" data-aos="fade-up">
                <p>What we do for you</p>
              </div>
              <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">Our partners</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <Slider {...setting1} className="wionbrand-slider-js-init">
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand1.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand2.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand3.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand4.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand1.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand2.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand3.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand4.svg" alt="" />
              </div>
            </Slider>
            <Slider {...setting2} className="wionbrand-slider-js-init">
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand5.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand6.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand7.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand8.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand5.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand6.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand7.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item">
                <img src="assets/images/brand/brand8.svg" alt="" />
              </div>
            </Slider>
            <Slider {...setting1} className="wionbrand-slider-js-init">
              <div className="wionbrand-slider-item mb-0">
                <img src="assets/images/brand/brand9.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item mb-0">
                <img src="assets/images/brand/brand10.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item mb-0">
                <img src="assets/images/brand/brand11.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item mb-0">
                <img src="assets/images/brand/brand12.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item mb-0">
                <img src="assets/images/brand/brand9.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item mb-0">
                <img src="assets/images/brand/brand10.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item mb-0">
                <img src="assets/images/brand/brand11.svg" alt="" />
              </div>
              <div className="wionbrand-slider-item mb-0">
                <img src="assets/images/brand/brand12.svg" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
