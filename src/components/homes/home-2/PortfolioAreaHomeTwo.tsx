 
 
import { Link } from "react-router-dom";  
import portfolio_data from "../../../data/portfolio-data";
export default function PortfolioAreaHomeTwo() {
  return (
    <section className="wiondefault-bg z-index">
      <div className="wionsection-padding">
        <div className="container">
          {/* Section Title */}
          <div className="wionsection-title center">
            <div
              className="wionsub-title aos-init"
              data-aos-delay="400"
              data-aos="fade-up"
            >
              <p>Our work speaks for us</p>
            </div>
            <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">
              Our projects
            </h2>
          </div>

          {/* Portfolio Items */}
          <div className="wionp-wraper">
            {/* Group them in pairs like original layout */}
            <div className="wionp-item">
              {portfolio_data.slice(6, 8).map((item) => (
                <div
                  key={item.id}
                  className={`wionp-wrap aos-init ${item.cls ?? ""}`}
                  data-aos-delay={item.dataAosDelay}
                  data-aos="fade-up"
                >
                  <div className="wionp-thumb">
                    <Link to="/single-portfolio">
                      <img src={item.img} alt={item.title} />
                    </Link>
                  </div>
                  <div className="wionp-content-wrap">
                    <div className="wionp-title">
                      <Link to="/single-portfolio">
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.description}</p>
                    </div>
                    <div className="wionp-btn-icon">
                      <Link className="wionportfolio-btn" to="/single-portfolio">
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="wionp-item">
              {portfolio_data.slice(8, 10).map((item) => (
                <div
                  key={item.id}
                  className={`wionp-wrap aos-init ${item.cls ?? ""}`}
                  data-aos-delay={item.dataAosDelay}
                  data-aos="fade-up"
                >
                  <div className="wionp-thumb">
                    <Link to="/single-portfolio">
                      <img src={item.img} alt={item.title} />
                    </Link>
                  </div>
                  <div className="wionp-content-wrap">
                    <div className="wionp-title">
                      <Link to="/single-portfolio">
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.description}</p>
                    </div>
                    <div className="wionp-btn-icon">
                      <Link className="wionportfolio-btn" to="/single-portfolio">
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="wionp-btn">
            <Link
              className="wiondefault-btn aos-init"
              data-aos-delay="1000"
              data-aos="fade-up"
              to="#"
            >
              View full projects
              <span className="wionbutton-icon">
                <img
                  className="arry1"
                  src="/assets/images/svg/arrow-right.png"
                  alt="arrow"
                  width={20}
                  height={20}
                />
                <img
                  className="arry2"
                  src="/assets/images/svg/arrow-right.png"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
