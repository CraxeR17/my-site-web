
import { Link } from 'react-router-dom';
 

export default function HeroAreaHomeTwo() {
  return (
    <section className="wiondefault-bg mb-0">
      <div className="wionhero-section2" style={{ backgroundImage: 'url(assets/images/hero/hero-bg2.png)' }}>
        <div className="container">
          <div className="wionhero-content2">
            <div className="wionsub-title title2 aos-init" data-aos-delay="200" data-aos="fade-up">
              <p>We're a leading creative agency</p>
            </div>
            <div className="aos-init" data-aos-delay="400" data-aos="fade-up">
              <h1>Bring your ideas</h1>
              <h1>to life creatively!</h1>
            </div>

            <div className="mt-80">
              <Link className="wiondefault-btn white-btn aos-init" data-aos-delay="600" data-aos="fade-up" to="/portfolio-1">View our work
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                </span>
              </Link>
            </div>
          </div>
          <div className="wionhero-data-wrap">
            <div className="wionhero-data-item aos-init" data-aos-delay="800" data-aos="fade-up">
              <h4>1980 Crescent Blvd, Los Angeles, CA 90026</h4>
            </div>
            <div className="wionhero-data-item item2 aos-init" data-aos-delay="1000" data-aos="fade-up">
              <h4>We design stories that turn into powerful brands</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
