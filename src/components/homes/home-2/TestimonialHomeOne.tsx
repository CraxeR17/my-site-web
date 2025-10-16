 

 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import testimonial images
import testimonial_img_1 from "../../../../public/assets/images/testimonial/t1.png";
import testimonial_img_2 from "../../../../public/assets/images/testimonial/t2.png";
import testimonial_img_3 from "../../../../public/assets/images/testimonial/t3.png";
import testimonial_img_4 from "../../../../public/assets/images/testimonial/t4.png"; 

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  img: any;
}

// ✅ Testimonial Data
const testimonial_data: Testimonial[] = [
  {
    id: 1,
    text: "Working with this agency was a dream. They understood my vision immediately and transformed it into a calm, elegant brand that speaks directly to my audience. The branding and UI design elevated the whole product. I’ve received countless compliments since launch.",
    name: "Sarah Lin",
    role: "Founder, Zenvue (Meditation App)",
    img: testimonial_img_1,
  },
  {
    id: 2,
    text: "Their team delivered a refined visual identity and pitch  I was impressed by how they balanced professionalism with personality in our brand. deck design that wowed investors. They understood the financial space but made it human.",
    name: "Daniel Choi",
    role: "Director, Orrin Finance (Fintech)",
    img: testimonial_img_3,
  },
  {
    id: 3,
    text: "I was blown away by the aesthetic and flow of the website they created for me. They captured the essence of my brand with sophistication and warmth. Clients now say they chose me because of how professional and inviting my website looks!",
    name: "Amira Nasri",
    role: "Owner, Lunara Studio (Interior Design)",
    img: testimonial_img_2,
  },
  {
    id: 4,
    text: "What impressed me most was their ability to combine creativity with strategy. They delivered a powerful brand identity and UX design that not only looked great but also boosted engagement. Reliable, smart, and seriously talented.",
    name: "James Porter",
    role: "CEO, Voltive Tech (SaaS Startup)",
    img: testimonial_img_4,
  },
];

// Slider Settings
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 1000,
  infinite: false,
  arrows: false,
  dots: false,
  centerMode: true,
  centerPadding: "0px",
  lazyLoad: "progressive" as const,

 
 

};

export default function TestimonialHomeOne() {
  return (
    <div className="wionsection-padding">
      <div className="container text-center">
        <div className="wionsection-title">
          <div
            className="wionsub-title aos-init"
            data-aos-delay="400"
            data-aos="fade-up"
          >
            <p>What people say</p>
          </div>
          <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">
            Testimonials
          </h2>
        </div>
 
        <Slider {...settings} className="wiont-slider-init2">
          {testimonial_data.map((item) => (
            <div className="wiont-item2" key={item.id}>
              <div className="wiont-wrap2">
                <div className="wiont-content2">
                  <h4>“{item.text}”</h4>
                </div>
                <div className="wiont-author-wrap2">
                  <div className="wiont-author-thumb2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-full mx-auto"
                      style={{ width: 60, height: 60, objectFit: "cover" }}
                    />
                  </div>
                  <div className="wiont-author-data">
                    <h6>{item.name}</h6>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
