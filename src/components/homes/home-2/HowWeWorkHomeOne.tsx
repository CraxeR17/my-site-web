 

import { useState } from "react";

interface ProcessItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  background: string;
}

const processItems: ProcessItem[] = [
  {
    id: 1,
    title: "Discover",
    description:
      "We begin with in-depth discovery sessions to fully understand your brand.",
    icon: "/assets/images/portfolio/icon1.svg",
    background: "/assets/images/portfolio/p1.png",
  },
  {
    id: 2,
    title: "Define",
    description:
      "We create a clear roadmap. It’s strategy meets creativity to set the foundation.",
    icon: "/assets/images/portfolio/icon2.svg",
    background: "/assets/images/portfolio/p2.jpg",
  },
  {
    id: 3,
    title: "Design",
    description:
      "We explore brand identity, UI/UX, layouts, typography, and interaction design.",
    icon: "/assets/images/portfolio/icon3.svg",
    background: "/assets/images/portfolio/p3.jpg",
  },
  {
    id: 4,
    title: "Develop",
    description:
      "We turn static designs into high-performance, scalable digital experiences.",
    icon: "/assets/images/portfolio/icon4.svg",
    background: "/assets/images/portfolio/p4.jpg",
  },
  {
    id: 5,
    title: "Deliver",
    description:
      "We ensure a smooth launch & provide ongoing support to help your brand thrive.",
    icon: "/assets/images/portfolio/icon5.svg",
    background: "/assets/images/portfolio/p5.jpg",
  },
];

export default function HowWeWorkHomeOne() {
  const [expandedId, setExpandedId] = useState<number>(1); 

  return (
    <section className="wiondefault-bg">
      <div className="wionsection-padding2">
        <div className="container">
          <div className="wionsection-title center">
            <div
              className="wionsub-title aos-init"
              data-aos-delay="400"
              data-aos="fade-up"
            >
              <p>How we work</p>
            </div>
            <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">
              Our process
            </h2>
          </div>

          <div className="wionp-image-expand">
            {processItems.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`wionp-img-expand-wrap ${isExpanded ? "expand" : ""}`}
                  style={{ backgroundImage: `url(${item.background})` }}
                  onMouseOver={() => setExpandedId(item.id)}
                >
                  <div className="wionp-expand-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="wionp-expand-text content-rotate">
                    <h3>{item.id}. {item.title}</h3>
                  </div>
                  <div className="wionp-expand-text">
                    <h3>{item.id}. {item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
