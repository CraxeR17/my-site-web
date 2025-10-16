 

"use client";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

// Hook: useHoverReveal
const useHoverReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;
    if (!container || !bg) return;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      bg.style.transform = `translate(${x}px, ${y}px)`;
    };

    container.addEventListener("mousemove", handleMove);
    return () => {
      container.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return { containerRef, bgRef };
};

// ServiceItem Component
interface ServiceItemProps {
  title: string;
  link: string;
  image: string;
}

const ServiceItem = ({ title, link, image }: ServiceItemProps) => {
  const { containerRef, bgRef } = useHoverReveal();

  return (
    <div
      ref={containerRef}
      className="wionservice-wrap service02 wionimage-reveal-item p-relative wionhover-reveal-item"
    >
      <Link to={link} className="d-block">
        <div className="wionservice-item wionservice-bg">
          <div className="wionservice-wraper">
            <div className="wionservice-title title2">
              <h3>{title}</h3>
            </div>
            <div className="wionservice-icon">
              <span className="wionbutton-icon icon2">
                <img
                  className="arry1"
                  src="/assets/images/svg/arrow-dark.svg"
                  alt="arrow-dark"
                />
                <img
                  className="arry2 arry3"
                  src="/assets/images/svg/arrow.svg"
                  alt="arrow"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div
        ref={bgRef}
        className="wionhover-reveal-bg"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

// Main Component
interface ServiceType {
  id: number;
  title: string;
  link: string;
  image: string;
}

const serviceData: ServiceType[] = [
  { id: 1, title: "Branding & Identity", link: "/single-service", image: "/assets/images/service/thumb1.png" },
  { id: 2, title: "UI/UX Design", link: "/single-service", image: "/assets/images/service/thumb2.png" },
  { id: 3, title: "Web Development", link: "/single-service", image: "/assets/images/service/thumb3.png" },
  { id: 4, title: "Digital Marketing", link: "/single-service", image: "/assets/images/service/thumb4.png" },
  { id: 5, title: "Content Creation", link: "/single-service", image: "/assets/images/service/thumb5.png" },
];

export default function ServiceAreaHomeTwo() {
  return (
    <div className="wiondefault-bg z-index overflow-hidden">
      <div className="wionsection-padding">
        <div className="container">
          <div className="wionsection-title pb-56">
            <div className="wionsub-title aos-init" data-aos-delay="400" data-aos="fade-up">
              <p>What we do for you</p>
            </div>
            <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">
              Our services
            </h2>
          </div>

          <div className="wionservice-image-reveal-wraper">
            {serviceData.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
