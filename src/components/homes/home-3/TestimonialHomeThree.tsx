 
import  { useState } from "react";
 
import brand1 from "../../../../public/assets/images/brand/b1.svg";
import brand2 from "../../../../public/assets/images/brand/b2.svg";
import brand3 from "../../../../public/assets/images/brand/b3.svg";
import brand4 from "../../../../public/assets/images/brand/b4.svg";
import brand5 from "../../../../public/assets/images/brand/b5.svg";
import brand6 from "../../../../public/assets/images/brand/b6.svg";

import thumb1 from "../../../../public/assets/images/testimonial/thumb1.png";
import thumb2 from "../../../../public/assets/images/testimonial/thumb2.png";
import thumb3 from "../../../../public/assets/images/testimonial/thumb3.png";
import thumb4 from "../../../../public/assets/images/testimonial/thumb4.png";
import thumb5 from "../../../../public/assets/images/testimonial/thumb5.png";
import thumb6 from "../../../../public/assets/images/testimonial/thumb4.png";  
 

interface Testimonial {
  id: string;
  brandImg: string;
  thumb: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: "tab-1",
    brandImg: brand1,
    thumb: thumb1,
    name: "Sarah Lin",
    role: "Founder, AZ X (Meditation App)",
    text: "Working with this agency was a dream. They understood my vision immediately and transformed it into a calm, elegant brand that speaks directly to my audience. The branding and UI design elevated the whole product. I’ve received countless compliments since launch.",
  },
  {
    id: "tab-2",
    brandImg: brand2,
    thumb: thumb2,
    name: "Amira Nasri",
    role: "Owner, LOGO Studio (Interior Design)",
    text: "I was blown away by the aesthetic & flow of the website they created for me. They captured the essence of my brand with sophistication & warmth. Clients now say they chose me because of how professional & inviting my website looks!",
  },
  {
    id: "tab-3",
    brandImg: brand3,
    thumb: thumb3,
    name: "Daniel Choi",
    role: "Director, Hausy Finance (Fintech)",
    text: "Their team delivered a refined visual identity and pitch deck design I was impressed by how they balanced professionalism with personality in our brand.  that wowed investors. They understood the financial space but made it human.",
  },
  {
    id: "tab-4",
    brandImg: brand4,
    thumb: thumb4,
    name: "James Porter",
    role: "CEO, Tech care (SaaS Startup)",
    text: "What impressed me most was their ability to combine creativity with strategy. They delivered a powerful brand identity and UX design that not only looked great but also boosted engagement. Reliable, smart, and seriously talented.",
  },
  {
    id: "tab-5",
    brandImg: brand5,
    thumb: thumb5,
    name: "Layla Rivera",
    role: "Co-founder, Froqlo (Fashion Brand)",
    text: "The team brought our Gen Z–focused fashion label to life with vibrant visuals, bold branding, and a seamless web experience. They ‘got’ our audience like no one else. Super responsive and fun to work with, too!",
  },
  {
    id: "tab-6",
    brandImg: brand6,
    thumb: thumb6,
    name: "Michael Tran",
    role: "Product Manager, Auralink (Music App)",
    text: "Their design process was both inspiring and strategic. They helped us build a sleek, intuitive interface for our app, and their branding work gave us a professional edge in a crowded market. Highly recommended for startups.",
  },
];

export default function TestimonialHomeThree() {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <div className="wiondefault-bg margin-30">
      <div className="wionsection-padding">
        <div className="container">
          <div className="wionsection-title center">
            <div className="wionsub-title">
              <p>What people say</p>
            </div>
            <h2>Testimonials</h2>
          </div>
 
          <div className="wiontab-wrap">
            <ul className="tabs flex gap-4">
              {testimonials.map((t) => (
                <li
                  key={t.id}
                  className={`tab-link cursor-pointer ${activeTab === t.id ? "current" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  <img src={t.brandImg} alt="" />
                </li>
              ))}
            </ul>

            {testimonials.map((t) => (
              <div
                key={t.id}
                id={t.id}
                className={`wiontab-content mt-6 ${activeTab === t.id ? "current" : "hidden"}`}
              >
                <div className="wiont-wrap3">
                  <div className="row flex flex-wrap">
                    <div className="col-lg-5 w-full lg:w-5/12">
                      <div className="wiont-thumb3">
                        <img src={t.thumb} alt={t.name} />
                      </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-center">
                      <div className="wiont-content3">
                        <h4>{t.text}</h4> 
                        <div className="wiont-author-wrap3 mt-50">
                          <div className="wiont-author-data">
                            <h6>{t.name}</h6>
                            <p>{t.role}</p>
                          </div>
                          <div className="wiont-author-icon">
                            <img src={t.brandImg} alt="" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
