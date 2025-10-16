 


"use client";
import { Link } from "react-router-dom";
import { useHoverReveal } from "../../../hooks/useHoverReveal";

const services = [
  { title: "Landing Pages", img: "/assets/images/service/thumb1.png" },
  { title: "Tiendas online", img: "/assets/images/service/thumb2.png" },
  { title: "Software a la medida", img: "/assets/images/service/thumb3.png" }
];

function ServiceItem({ title, img }: { title: string; img: string }) {
  const { containerRef, bgRef } = useHoverReveal();

  return (
    <div
      ref={containerRef}
      className="wionservice-wrap wionimage-reveal-item p-relative wionhover-reveal-item"
    >
      <Link to="/single-service" className="d-block">
        <div className="wionservice-item">
          <div className="wionservice-wraper">
            <div className="wionservice-title">
              <h3>{title}</h3>
            </div>
            <div className="wionservice-icon">
              <span className="wionbutton-icon icon2">
                <img className="arry1" src="assets/images/svg/arrow-white.svg" alt="" />
                <img className="arry2 arry3" src="assets/images/svg/arrow.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </Link>
      {/* ref for hover-moving background */}
      <div
        ref={bgRef}
        className="wionhover-reveal-bg"
        style={{ backgroundImage: `url(${img})` }}
      />
    </div>
  );
}

const ServiceAreaHomeOne = () => {
  return (
    <div className="wionsection-padding bg-heading">
      <div className="container">
        <div className="row">
          {/* left content */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="wiondefault-content content2">
              <div
                className="wionsub-title title2 aos-init"
                data-aos-delay="400"
                data-aos="fade-up"
              >
                <p>Lo que hago por ti</p>
              </div>
              <h2 className="aos-init" data-aos-delay="500" data-aos="fade-up">
                Mis Servicios
              </h2>
              <p className="aos-init" data-aos-delay="600" data-aos="fade-up">
                Combino creatividad y estrategia para ofrecer mis servicios y satisfacer las necesidades de mis clientes.
              </p>
            </div>
          </div>

          {/* right content with hover reveal */}
          <div className="col-lg-6">
            <div className="wionservice-image-reveal-wraper">
              {services.map((s, i) => (
                <ServiceItem key={i} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaHomeOne;
