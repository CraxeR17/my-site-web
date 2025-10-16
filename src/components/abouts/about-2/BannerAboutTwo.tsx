
 
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";




export default function BannerAboutTwo() {

  useEffect(() => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Create SplitText instance
    const split = new SplitText(".WION_text_invert_2", { type: "lines" });

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
    <div className="wionsection-padding bg-heading">
      <div className="container">
        <div className="wionabout-content3 pt-0 WION_text_invert_2">
          <div className="wiontitle">Soy Ramses Cubides,</div>
          <div className="wiontitle">Software Engineer</div>
          <div className="wiontitle">crafting memorable brands and</div>
          <div className="wiontitle">digital experiences.
            <div className="wiontitle-thumb">
              <img src="assets/images/about/thumb2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
