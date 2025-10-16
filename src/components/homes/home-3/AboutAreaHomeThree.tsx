 
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function AboutAreaHomeThree() {

  useEffect(() => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Create SplitText instance
    const split = new SplitText(".WION_text_invert", { type: "lines" });

    // Animate each line
    split.lines.forEach((line: any) => {
      gsap.to(line, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: line,
          scrub: 1,
          start: "top 85%",
          end: "bottom center",
        },
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      split.revert();
    };
  }, []);



  return (
    <div className="wiondefault-bg">
      <div className="wionsection-padding">
        <div className="container">
          <div className="wionabout-content3 pt-0 WION_text_invert">
            <div className="wiontitle">Welcome to WION Since 2010,</div>
            <div className="wiontitle">we've been dedicated to
              <div className="wiontitle-thumb">
                <img src="assets/images/about/thumb1.png" alt="" />
              </div>
            </div>
            <div className="wiontitle">crafting morable brands and</div>
            <div className="wiontitle">digital experiences.
              <div className="wiontitle-thumb">
                <img src="assets/images/about/thumb2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
