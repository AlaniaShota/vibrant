import overview from "../../../assets/img/Pzrx2TCfEuPtWYzxPCANNXexA.webp";
import paid from "../../../assets/img/invoicing.726e44e3.jpg";
import user from "../../../assets/img/mIsg7QBdpgJuZAJYdalsMEbyX50.jpg";
import { Button, SectionTitle } from "../../../components";
import { aboutData } from "../../../mockData/home/aboutData";
import { uiText } from "../../../mockData/uiText";

import { motion } from "framer-motion";

import "./About.scss";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="about-section-content"
      >
        <SectionTitle
          styleAbout="styleAbout"
          sectionTitle={aboutData.title}
          sectionDescription={aboutData.description}
        />
        <Button bgColor="bgColor">
          <span className="btn-text btn">{uiText.buttonText}</span>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        className="about-img-overview"
      >
        <img src={overview} alt="Overview" className="overview" />
        <img src={paid} alt="Error" className="paid-img" />
        <img src={user} alt="Error" className="user-img" />
      </motion.div>
    </div>
  );
};
