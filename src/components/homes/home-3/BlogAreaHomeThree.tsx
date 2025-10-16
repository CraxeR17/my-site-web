
import { Link } from 'react-router-dom';
 

export default function BlogAreaHomeThree() {
  return (
    <div className="wiondefault-bg margin-30">
      <div className="wionsection-padding2">
        <div className="container">
          <div className="wionsection-title">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
                  <p>our creative ideas and insights</p>
                </div>
                <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">Our articles</h2>
              </div>
              <div className="col-xl-5 col-lg-4 d-flex align-items-end justify-content-end">
                <div className="wiontitle-btn">
                  <Link className="wiondefault-btn" to="/blog">View all articles
                    <span className="wionbutton-icon">
                      <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                      <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="wionblog-wrap aos-init" data-aos-delay="400" data-aos="fade-up">
                <div className="wionblog-thumb">
                  <Link to="/single-blog">
                    <img src="assets/images/blog/b4.png" alt="" />
                  </Link>
                  <Link to="/single-blog">
                    <div className="wionblog-btn">Creative Agency</div>
                  </Link>
                </div>
                <div className="wionblog-meta">
                  <ul>
                    <li>
                      <Link to="/single-blog">20 June 2025 –</Link>
                    </li>
                    <li>10 min read</li>
                  </ul>
                </div>
                <div className="wionblog-title">
                  <Link to="/single-blog">
                    <h3>Top 5 reasons to launch your product with a creative agency</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="wionblog-wrap aos-init" data-aos-delay="500" data-aos="fade-up">
                <div className="wionblog-thumb">
                  <Link to="/single-blog">
                    <img src="assets/images/blog/b5.png" alt="" />
                  </Link>
                  <Link to="/single-blog">
                    <div className="wionblog-btn">Technology</div>
                  </Link>
                </div>
                <div className="wionblog-meta">
                  <ul>
                    <li>
                      <Link to="/single-blog">18 June 2025 –</Link>
                    </li>
                    <li>4 min read</li>
                  </ul>
                </div>
                <div className="wionblog-title">
                  <Link to="/single-blog">
                    <h3>How AI is reshaping agency-brand dynamics: At a glance</h3>
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
