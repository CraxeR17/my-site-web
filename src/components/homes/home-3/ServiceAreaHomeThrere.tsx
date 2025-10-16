
import { Link } from 'react-router-dom';
 

export default function ServiceAreaHomeThrere() {
  return (
    <div className="wiondefault-bg">
      <div className="wionsection-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="wiondefault-content">
                <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
                  <p>What we do for you</p>
                </div>
                <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">Our services </h2>
                <p className="aos-init" data-aos-delay="600" data-aos="fade-up">We blend creativity and strategy to deliver our services to meet the needs of our clients.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wionservice-image-reveal-wraper">
                <div className="wionservice-wrap wionimage-reveal-item p-relative wionhover-reveal-item">
                  <Link to="/single-service" className="d-block">
                    <div className="wionservice-item wionservice-bg">
                      <div className="wionservice-wraper">
                        <div className="wionservice-title title2">
                          <h3>Branding & Identity</h3>
                        </div>
                        <div className="wionservice-icon">
                          <span className="wionbutton-icon icon2">
                            <img className="arry1" src="assets/images/svg/arrow-dark.svg" alt="" />
                            <img className="arry2 arry3" src="assets/images/svg/arrow.svg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="wionservice-wrap wionimage-reveal-item p-relative wionhover-reveal-item">
                  <Link to="/single-service" className="d-block">
                    <div className="wionservice-item wionservice-bg">
                      <div className="wionservice-wraper">
                        <div className="wionservice-title title2">
                          <h3>UI/UX Design</h3>
                        </div>
                        <div className="wionservice-icon">
                          <span className="wionbutton-icon icon2">
                            <img className="arry1" src="assets/images/svg/arrow-dark.svg" alt="" />
                            <img className="arry2 arry3" src="assets/images/svg/arrow.svg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="wionservice-wrap wionimage-reveal-item p-relative wionhover-reveal-item">
                  <Link to="/single-service" className="d-block">
                    <div className="wionservice-item wionservice-bg">
                      <div className="wionservice-wraper">
                        <div className="wionservice-title title2">
                          <h3>Web Development</h3>
                        </div>
                        <div className="wionservice-icon">
                          <span className="wionbutton-icon icon2">
                            <img className="arry1" src="assets/images/svg/arrow-dark.svg" alt="" />
                            <img className="arry2 arry3" src="assets/images/svg/arrow.svg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="wionservice-wrap wionimage-reveal-item p-relative wionhover-reveal-item">
                  <Link to="/single-service" className="d-block">
                    <div className="wionservice-item wionservice-bg">
                      <div className="wionservice-wraper">
                        <div className="wionservice-title title2">
                          <h3>Digital Marketing</h3>
                        </div>
                        <div className="wionservice-icon">
                          <span className="wionbutton-icon icon2">
                            <img className="arry1" src="assets/images/svg/arrow-dark.svg" alt="" />
                            <img className="arry2 arry3" src="assets/images/svg/arrow.svg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="wionservice-wrap wionimage-reveal-item p-relative wionhover-reveal-item">
                  <Link to="/single-service" className="d-block">
                    <div className="wionservice-item wionservice-bg bg2">
                      <div className="wionservice-wraper">
                        <div className="wionservice-title title2">
                          <h3>Content Creation</h3>
                        </div>
                        <div className="wionservice-icon">
                          <span className="wionbutton-icon icon2">
                            <img className="arry1" src="assets/images/svg/arrow-dark.svg" alt="" />
                            <img className="arry2 arry3" src="assets/images/svg/arrow.svg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
