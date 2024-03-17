import { Button } from "../../../../components";

import "./PayloadCard.scss";

import { FcCheckmark } from "react-icons/fc";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
export const PayloadCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const payloadCardData = [
    {
      id: 1,
      title: "Personal",
      description: "Best for brands that need designs on an ongoing basis.",
      price: 2.99,
      designs: "Request unlimited designs",
      deliverables: "Deliverables as-you-need",
      revisions: "No limit on revisions",
    },
    {
      id: 2,
      title: "Business",
      description: "Best for brands that need designs on an ongoing basis.",
      price: 9.99,
      designs: "Request unlimited designs",
      deliverables: "Deliverables as-you-need",
      revisions: "No limit on revisions",
      code: "No code needed",
      support: "Individual help center",
      mentor: "Your personal mentor",
    },
  ];

  return (
    <div ref={ref} className="payload">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="payload-container"
      >
        {payloadCardData.map((item) => (
          <div key={item.id} className="payload-card-content">
            <div className="payload-section">
              <div className="payload-section-header">
                <h1 className="payload-section-title">{item.title}</h1>
                <p className="payload-section-description">
                  {item.description}
                </p>
              </div>
              <div className="payload-section-main">
                <h1 className="payload-price">
                  ${item.price}
                  <span className="payload-mo">/mo</span>
                </h1>
                <Button bgColor={item.id === 1 ? "bgColor" : null}>
                  <span className={item.id === 1 ? "btn-text btn" : "btn-text"}>
                    Try for Free
                  </span>
                </Button>
              </div>
            </div>
            <ul className="payload-section-about">
              <li className="payload-section-list">
                <span>
                  <FcCheckmark />
                </span>
                <h3 className="payload-text">{item.designs}</h3>
              </li>
              <li className="payload-section-list">
                <span>
                  <FcCheckmark />
                </span>
                <h3 className="payload-text">{item.deliverables}</h3>
              </li>
              <li className="payload-section-list">
                <span>
                  <FcCheckmark />
                </span>
                <h3 className="payload-text">{item.revisions}</h3>
              </li>
              {item.code && (
                <>
                  <li className="payload-section-list">
                    <span>
                      <FcCheckmark />
                    </span>
                    <h3 className="payload-text">{item.code}</h3>
                  </li>
                  <li className="payload-section-list">
                    <span>
                      <FcCheckmark />
                    </span>
                    <h3 className="payload-text">{item.support}</h3>
                  </li>
                  <li className="payload-section-list">
                    <span>
                      <FcCheckmark />
                    </span>
                    <h3 className="payload-text">{item.mentor}</h3>
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
