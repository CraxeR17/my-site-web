 
import { Link } from 'react-router-dom';
import team_data from '../../../data/team-data';
 


export default function TeamAreaHomeThree() {
  return (
    <section className="wiondefault-bg wionsection-padding2">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="wiondefault-content team3">
              <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
                <p>We're a team of creative minds</p>
              </div>
              <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">Our team</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="wionteam-wraper">
              <div className="wionteam-item">
                {team_data.slice(4, 8).map((item, i) => (
                  <Link to="/single-team" key={i}>
                    <div className="wionteam-wrap">
                      <div className="wionteam-thumb">
                        <img src={item.img} alt="Thumb" />
                      </div>
                      <div className="wionteam-content">
                        <h4>{item.name}</h4>
                        <p>{item.role}</p>
                      </div>
                    </div>
                  </Link>
                ))
                }

              </div>
              <div className="wionteam-item">
                {team_data.slice(8, 12).map((item, i) => (
                  <Link to="/single-team" key={i}>
                    <div className="wionteam-wrap">
                      <div className="wionteam-thumb">
                        <img src={item.img} alt="Thumb" />
                      </div>
                      <div className="wionteam-content">
                        <h4>{item.name}</h4>
                        <p>{item.role}</p>
                      </div>
                    </div>
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
