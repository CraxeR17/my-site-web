 import { Link } from 'react-router-dom';
import  { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function HeroAreaHomeThree() {


  useEffect(() => {
    // Register plugin
    gsap.registerPlugin(ScrollTrigger);

    // Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wionhero-section3",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: ".wionhome-3-thumb-wrap",
      },
    });

    tl.fromTo(
      ".left-rotate img",
      { y: -350 },
      { y: -2500 }
    ).fromTo(
      ".right-rotate img",
      { y: -600 },
      { y: -3000 },
      0 // start at same time as left image
    );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);


  return (
    <div className="wionhero-section3">
      <div className="container">
        <div className="wionhero-content3">
          <div className="wionsub-title aos-init" data-aos-delay="200" data-aos="fade-up">
            <p>We’re a friendly, top-notch creative agency!</p>
          </div>
          <h1 className="aos-init" data-aos-delay="400" data-aos="fade-up">Purposeful creativity, we create you lead</h1>
          <div className="mt-80">
            <Link className="wiondefault-btn aos-init" data-aos-delay="600" data-aos="fade-up" to="/portfolio-1">View our work
              <span className="wionbutton-icon">
                <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="wionhero-3-thumb-wrapper">
        <div className="wionhome-3-thumb-wrap">
          <div className="container">
            <div className="wionhero-3-img-box">
              <div className="row">
                <div className="col-12">
                  <div className="wionhero-3-img left-rotate">
                    <img src="assets/images/hero/thumb5.png" alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="wionhero-3-img text-end right-rotate">
                    <img src="assets/images/hero/thumb6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
