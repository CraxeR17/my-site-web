 

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

export default function AboutAreaHomeTwo() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wionabout-animation-wraper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // ✅ Images
      tl.to(
        "#image-tl",
        { x: "-90vw", y: "-90vh", rotation: -15 },
        0
      );
      tl.to(
        "#image-tr",
        { x: "80vw", y: "-80vh", rotation: 15 },
        0
      );
      tl.to(
        "#image-bl",
        { x: "-75vw", y: "80vh", rotation: -15 },
        0
      );
      tl.to(
        "#image-br",
        { x: "75vw", y: "80vh", rotation: 15 },
        0
      );
 
      tl.fromTo(
        ".text-content",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, ease: "power1.out" },
        0 // keep synced with images or set e.g. "0.2"
      );

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        tl.kill();
      };
    }
  }, []);

  return (
    <div className="wionabout-animation-section">
      <div className="wionabout-animation-wraper">
        <div className="wionabout-animation-wrap">
          <div className="content-wrapper">
            <img id="image-tl" className="animated-image" src="assets/images/about/thumb16.png" alt="Top Left Image" />
            <img id="image-tr" className="animated-image" src="assets/images/about/thumb14.png" alt="Top Right Image" />
            <img id="image-bl" className="animated-image" src="assets/images/about/thumb15.png" alt="Bottom Left Image" />
            <img id="image-br" className="animated-image" src="assets/images/about/thumb13.png" alt="Bottom Right Image" />
            <div className="wionabout-content4 text-content">
              <h3>
                Welcome to WION! Since 2010, our team has been dedicated to creating unforgettable brands and digital
                experiences. Whether you're starting out or ready to elevate your vision, we're here to help.
              </h3>
              <div className="mt-50">
                <Link className="wiondefault-btn white-btn" to="/contact-us1">
                  Let’s get creative together!
                  <span className="wionbutton-icon">
                    <img className="arry1" src="assets/images/svg/arrow-right.png" alt="" />
                    <img className="arry2" src="assets/images/svg/arrow-right.png" alt="" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
