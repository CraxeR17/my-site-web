 
import  { useState } from "react"; 
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "01. What services do you offer?",
    answer:
      "We specialize in branding, UI/UX design, web development, and digital strategy. From logo design to full-scale digital experiences, we offer end-to-end creative solutions.",
  },
  {
    id: 2,
    question: "02. How long does a typical project take?",
    answer:
      "Project timelines vary based on scope, but most branding projects take 3–4 weeks, and full website projects take 6–8 weeks. We’ll give you a clear timeline before we start.",
  },
  {
    id: 3,
    question: "03. What is your pricing structure?",
    answer:
      "We offer flexible pricing based on project needs — from fixed packages for startups to custom quotes for larger engagements. Let’s chat and find the best fit for you.",
  },
  {
    id: 4,
    question: "04. Can you work with existing brand assets or websites?",
    answer:
      "Absolutely. We can refresh and expand on your current assets or work from the ground up, depending on your needs and goals.",
  },
  {
    id: 5,
    question: "05. What industries do you work with?",
    answer:
      "We’ve worked with a wide range—from tech and wellness to fashion and finance. Our creative process adapts to any industry with a user-first approach.",
  },
];

export default function FaqAreaHomeOne() {
  const [activeId, setActiveId] = useState<number | null>(1); 

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="wiondefault-bg">
      <div className="wionsection-padding">
        <div className="container">
          {/* Section Title */}
          <div className="wionsection-title text-center">
            <div
              className="wionsub-title"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p>Clarity Builds Confidence</p>
            </div>
            <h2 data-aos="fade-up" data-aos-delay="500">
              Common inquiries
            </h2>
          </div>

          {/* FAQ Wrapper */}
          <div className="wionfaq-wrap1">
            {faq_data.map((faq) => (
              <div
                key={faq.id}
                className={`wionfaq-item ${
                  activeId === faq.id ? "open" : ""
                }`}
              >
                <div
                  className="wionfaq-header cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3>{faq.question}</h3>
                  <div className="wionactive-icon"> 
                    <img className="mynusicon" src="/assets/images/svg/plas.svg" alt="" /> 
                  </div>
                </div>

                <div
                  className="wionfaq-body transition-all duration-300 ease-in-out"
                  style={{
                    display: activeId === faq.id ? "block" : "none",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
