
import { Link } from 'react-router-dom';
 

export default function PortfolioAreaHomeThree() {
  return (
    <section className="wiondefault-bg margin-30 wionp-sticky-section">
      <div className="wionsection-padding wionp-sticky">
        <div className="container">
          <div className="wionsection-title center">
            <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
              <p>Our work speaks for us</p>
            </div>
            <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">Our projects</h2>
          </div>
          <div className="wionportfolio-row">
            <div className="wionp-wrap card-sticky">
              <div className="wionp-thumb">
                <Link to="/single-portfolio">
                  <img src="assets/images/portfolio/pp1.png" alt="" />
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
            <div className="wionp-wrap card-sticky">
              <div className="wionp-thumb">
                <Link to="/single-portfolio">
                  <img src="assets/images/portfolio/pp2.png" alt="" />
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
            <div className="wionp-wrap card-sticky">
              <div className="wionp-thumb">
                <Link to="/single-portfolio">
                  <img src="assets/images/portfolio/pp3.png" alt="" />
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
            <div className="wionp-wrap card-sticky">
              <div className="wionp-thumb">
                <Link to="/single-portfolio">
                  <img src="assets/images/portfolio/pp4.png" alt="" />
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
          </div>
          <div className="wionp-btn aos-init" data-aos-delay="500" data-aos="fade-up">
            <Link className="wiondefault-btn" to="/portfolio-1">View full projects
              <span className="wionbutton-icon">
                <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
