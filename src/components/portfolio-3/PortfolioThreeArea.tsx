 
import { Link } from 'react-router-dom';
 
import Slider from 'react-slick'
// slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speechSynthesis: true,
      speed: 3000,
      infinite: true,
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

export default function PortfolioThreeArea() {
  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title center max-width-750">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>Our work speaks for us</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">Our projects</h1>
        </div>
      </div>
      <Slider {...settings} className="wionportfolio-slider-js-init aos-init" data-aos-delay="700" data-aos="fade-up">
        <div className="wionp-wrap">
          <div className="wionp-thumb">
            <Link to="/single-portfolio">
              <img src="assets/images/portfolio/pp10.png" alt="" />
            </Link>
          </div>
          <div className="wionp-content-wrap">
            <div className="wionp-title">
              <Link to="/single-portfolio">
                <h3>Lunora</h3>
              </Link>
              <p>A clean and functional mobile app concept</p>
            </div>
            <div className="wionp-btn-icon">
              <Link className="wionportfolio-btn" to="/single-portfolio">
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="wionp-wrap">
          <div className="wionp-thumb">
            <Link to="/single-portfolio">
              <img src="assets/images/portfolio/pp7.png" alt="" />
            </Link>
          </div>
          <div className="wionp-content-wrap">
            <div className="wionp-title">
              <Link to="/single-portfolio">
                <h3>VoltEdge</h3>
              </Link>
              <p>Sophisticated brand and web presence</p>
            </div>
            <div className="wionp-btn-icon">
              <Link className="wionportfolio-btn" to="/single-portfolio">
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="wionp-wrap">
          <div className="wionp-thumb">
            <Link to="/single-portfolio">
              <img src="assets/images/portfolio/pp8.png" alt="" />
            </Link>
          </div>
          <div className="wionp-content-wrap">
            <div className="wionp-title">
              <Link to="/single-portfolio">
                <h3>Nomio</h3>
              </Link>
              <p>Elegant brand identity and interface for a skincare startup</p>
            </div>
            <div className="wionp-btn-icon">
              <Link className="wionportfolio-btn" to="/single-portfolio">
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="wionp-wrap">
          <div className="wionp-thumb">
            <Link to="/single-portfolio">
              <img src="assets/images/portfolio/pp9.png" alt="" />
            </Link>
          </div>
          <div className="wionp-content-wrap">
            <div className="wionp-title">
              <Link to="/single-portfolio">
                <h3>Haus&Co</h3>
              </Link>
              <p>Bold rebranding for a lifestyle clothing label aiming</p>
            </div>
            <div className="wionp-btn-icon">
              <Link className="wionportfolio-btn" to="/single-portfolio">
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="wionp-wrap">
          <div className="wionp-thumb">
            <Link to="/single-portfolio">
              <img src="assets/images/portfolio/pp10.png" alt="" />
            </Link>
          </div>
          <div className="wionp-content-wrap">
            <div className="wionp-title">
              <Link to="/single-portfolio">
                <h3>Lunora</h3>
              </Link>
              <p>A clean and functional mobile app concept</p>
            </div>
            <div className="wionp-btn-icon">
              <Link className="wionportfolio-btn" to="/single-portfolio">
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="wionp-wrap">
          <div className="wionp-thumb">
            <Link to="/single-portfolio">
              <img src="assets/images/portfolio/pp7.png" alt="" />
            </Link>
          </div>
          <div className="wionp-content-wrap">
            <div className="wionp-title">
              <Link to="/single-portfolio">
                <h3>VoltEdge</h3>
              </Link>
              <p>Sophisticated brand and web presence</p>
            </div>
            <div className="wionp-btn-icon">
              <Link className="wionportfolio-btn" to="/single-portfolio">
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="wionp-wrap">
          <div className="wionp-thumb">
            <Link to="/single-portfolio">
              <img src="assets/images/portfolio/pp8.png" alt="" />
            </Link>
          </div>
          <div className="wionp-content-wrap">
            <div className="wionp-title">
              <Link to="/single-portfolio">
                <h3>Nomio</h3>
              </Link>
              <p>Elegant brand identity and interface for a skincare startup</p>
            </div>
            <div className="wionp-btn-icon">
              <Link className="wionportfolio-btn" to="/single-portfolio">
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="wionp-wrap">
          <div className="wionp-thumb">
            <Link to="/single-portfolio">
              <img src="assets/images/portfolio/pp9.png" alt="" />
            </Link>
          </div>
          <div className="wionp-content-wrap">
            <div className="wionp-title">
              <Link to="/single-portfolio">
                <h3>Haus&Co</h3>
              </Link>
              <p>Bold rebranding for a lifestyle clothing label aiming</p>
            </div>
            <div className="wionp-btn-icon">
              <Link className="wionportfolio-btn" to="/single-portfolio">
                <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}
