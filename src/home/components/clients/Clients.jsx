import "./Clients.scss";

import { SectionTitle } from "../../../components";
import { clientsData } from "../../../mockData/home/clientData";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      animate={inView ? "visible" : "hidden"}
      className="clients-section"
    >
      <SectionTitle sectionTitle={clientsData.sectionTitle} />
      <div className="clients-container">
        {clientsData.clients.map((item) => (
          <motion.div
            variants={itemAnimation}
            key={item.id}
            className="client-card"
          >
            <div className="client-card-header">
              <div className="client-card-img">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="client-card-img-content"
                />
              </div>
              <div className="client-title">
                <h3 className="client-name">{item.name}</h3>
                <span className="client-status">{item.status}</span>
              </div>
            </div>
            <div className="client-coments-section">
              <p className="client-coments">{item.description}</p>
              {item.secondDescription ? (
                <p className="client-secondary-coment">
                  {item.secondDescription}
                </p>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
