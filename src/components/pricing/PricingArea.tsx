
import { Link } from 'react-router-dom';
 

export default function PricingArea() {
  return (
    <section className="wionabout-section1 wiondefault-bg">
      <div className="container">
        <div className="wionsection-title center max-width-780">
          <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
            <p>Affordable pricing plans for any need</p>
          </div>
          <h1 className="aos-init" data-aos-delay="500" data-aos="fade-up">Pricing plans</h1>
        </div>
        <div className="wionpricing-wraper">
          <div className="wionpricing-wrap wrap1 aos-init" data-aos-delay="400" data-aos="fade-up">
            <div className="wionpricing-header">
              <h3>Starter — $1,200</h3>
              <p>Perfect for startups & solo founders launching with clarity.</p>
            </div>
            <div className="wionpricing-body mt-50">
              <h4>Includes:</h4>
              <ul>
                <li>Brand Discovery Session</li>
                <li>Logo Design (2 Concepts + 2 Revisions)</li>
                <li>Basic Brand Guidelines</li>
                <li>1-page Scroll Website (Webflow/Figma)</li>
                <li>Mobile Responsive Design</li>
                <li className="pb-0">Launch-ready files & handover</li>
              </ul>
              <div className="wionpricing-body-text">
                <p><span>Timeline:</span>1–2 weeks</p>
                <p className="pb-0"><span>Support:</span>Email support post-launch (7 days)</p>
              </div>
            </div>
            <div className="wionpricing-footer mt-50">
              <Link className="wiondefault-btn" to="/contact-us1">Choose the plan
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                </span>
              </Link>
            </div>
          </div>
          <div className="wionpricing-wrap wrap2 aos-init" data-aos-delay="500" data-aos="fade-up">
            <div className="wionpricing-header">
              <h3>Growth — $3,200</h3>
              <p>For growing brands ready to stand out and scale.</p>
            </div>
            <div className="wionpricing-body mt-50">
              <h4>Includes:</h4>
              <ul>
                <li>Full Brand Identity</li>
                <li>Brand Strategy & Positioning Brief</li>
                <li>5-page Website (Webflow)</li>
                <li>Wireframe + High-Fidelity Screens</li>
                <li>CMS Setup</li>
                <li className="pb-0">Mobile Optimization</li>
              </ul>
              <div className="wionpricing-body-text">
                <p><span>Timeline:</span>3–5 weeks</p>
                <p className="pb-0"><span>Support:</span>30-day post-launch support</p>
              </div>
            </div>
            <div className="wionpricing-footer mt-50">
              <Link className="wiondefault-btn" to="/contact-us2">Choose the plan
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                </span>
              </Link>
            </div>
          </div>
          <div className="wionpricing-wrap wrap3 aos-init" data-aos-delay="600" data-aos="fade-up">
            <div className="wionpricing-header">
              <h3>Pro — $6,800+</h3>
              <p>Tailored solutions for established businesses or complex projects.</p>
            </div>
            <div className="wionpricing-body mt-50">
              <h4>Includes:</h4>
              <ul>
                <li>Custom Brand Strategy Workshop</li>
                <li>Advanced Brand Identity System</li>
                <li>Website Design & Development</li>
                <li>E-commerce or Web App UI/UX </li>
                <li>Interaction Design & Micro-animations</li>
                <li className="pb-0">Content Copywriting Support</li>
              </ul>
              <div className="wionpricing-body-text">
                <p><span>Timeline:</span>6-8 weeks</p>
                <p className="pb-0"><span>Support:</span>60-day premium support</p>
              </div>
            </div>
            <div className="wionpricing-footer mt-50">
              <Link className="wiondefault-btn" to="/contact-us3">Choose the plan
                <span className="wionbutton-icon">
                  <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                  <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
