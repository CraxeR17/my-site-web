
import { Link } from 'react-router-dom';
 

export default function PortfolioDetailsArea() {
  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>Our joy in the success of the project</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">Lunora</h1>
        </div>
        <div className="wionp-d-wrapper aos-init" data-aos-delay="700" data-aos="fade-up">
          <div className="wionp-d-thumb">
            <img src="assets/images/portfolio/thumb11.png" alt="" />
          </div>
          <div className="wionp-d-data-wrap mt-50">
            <div className="wionp-d-data-text">
              <ul>
                <li><span>Project Type:</span>UI/UX Design | Mobile App Concept</li>
                <li><span>Industry::</span>Tech</li>
                <li><span>Timeline:</span>2 Months</li>
                <li>
                  <Link className="wiondefault-btn wionp-btn2" to="/portfolio-1">View live project
                    <span className="wionbutton-icon">
                      <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                      <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                    </span>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
          <div className="wionp-single-wrap">
            <div className="wionp-single-data mt-50">
              <h3>Overview</h3>
              <p>Lunora is a modern mobile app concept crafted with a focus on simplicity, clarity, and everyday usability. The goal was to design an interface that feels intuitive and seamless—combining clean visuals with thoughtful functionality to enhance the user experience.</p>
            </div>
            <div className="wionp-single-data pt-40">
              <h3>Challenge</h3>
              <p>Design a mobile app that minimizes clutter while maximizing usability. The app needed to feel light and effortless while supporting key user flows without distraction.</p>
            </div>
            <div className="wionp-single-data pt-40">
              <h3>Approach</h3>
              <p>We used a minimal design system with a calming color palette, spacious layouts, and clear typography to ensure content takes center stage. Every screen was designed with user intent in mind, prioritizing accessibility, flow, and clarity of action.</p>
            </div>
          </div>
          <div className="wionp-single-thumb pt-40">
            <img src="assets/images/portfolio/thumb12.png" alt="" />
          </div>
          <div className="wionp-single-wrap">
            <div className="wionp-single-data">
              <h3>Key Features</h3>
              <p>This app is about user interface design, user experience strategy, interaction design.</p>
              <ul>
                <li>
                  <h4>Intuitive onboarding experience</h4>
                </li>
                <li>
                  <h4>Streamlined navigation</h4>
                </li>
                <li>
                  <h4>Modular UI components for flexibility</h4>
                </li>
                <li>
                  <h4>Light and dark mode compatibility</h4>
                </li>
                <li>
                  <h4>Smooth micro-interactions for enhanced engagement</h4>
                </li>
              </ul>
            </div>
            <div className="wionp-single-data pt-40">
              <h3>Result</h3>
              <p>Lunora stands as a refined concept that showcases how design can be both beautiful and practical. It's a blueprint for what user-first, clean mobile apps should feel like—functional, modern, and ready for real-world use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
