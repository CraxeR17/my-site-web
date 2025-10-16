 
 
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 13000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [{
    breakpoint: 1024,
    settings: {
      speed: 8000  
    }
  }, {
    breakpoint: 600,
    settings: {
      speed: 5000  
    }
  }]
};

export default function TextSlideHomeThree() {
  return (
    <div className="wiondefault-bg bg-heading">
      <div className="wioncta-section exta-padding overflow-hidden">
        <div className="fixed-height">
          <Slider {...settings} className="wioncta-slider-init">
            <div className="wioncta-slider-content">
              <h2>Let's collaborate to something amazing</h2>
              <div className="wioncta-victor-icon">
                <img src="assets/images/cta/icon1.svg" alt="Icon" />
              </div>
            </div>
            <div className="wioncta-slider-content">
              <h2>Let's collaborate to something amazing</h2>
              <div className="wioncta-victor-icon">
                <img src="assets/images/cta/icon1.svg" alt="Icon" />
              </div>
            </div>
            <div className="wioncta-slider-content">
              <h2>Let's collaborate to something amazing</h2>
              <div className="wioncta-victor-icon">
                <img src="assets/images/cta/icon1.svg" alt="Icon" />
              </div>
            </div>
            <div className="wioncta-slider-content">
              <h2>Let's collaborate to something amazing</h2>
              <div className="wioncta-victor-icon">
                <img src="assets/images/cta/icon1.svg" alt="Icon" />
              </div>
            </div>
            <div className="wioncta-slider-content">
              <h2>Let's collaborate to something amazing</h2>
              <div className="wioncta-victor-icon">
                <img src="assets/images/cta/icon1.svg" alt="Icon" />
              </div>
            </div>
            <div className="wioncta-slider-content">
              <h2>Let's collaborate to something amazing</h2>
              <div className="wioncta-victor-icon">
                <img src="assets/images/cta/icon1.svg" alt="Icon" />
              </div>
            </div>
            <div className="wioncta-slider-content">
              <h2>Let's collaborate to something amazing</h2>
              <div className="wioncta-victor-icon">
                <img src="assets/images/cta/icon1.svg" alt="Icon" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
