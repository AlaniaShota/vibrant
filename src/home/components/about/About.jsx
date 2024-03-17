import overview from "../../../assets/img/Pzrx2TCfEuPtWYzxPCANNXexA.webp";
import paid from "../../../assets/img/invoicing.726e44e3.jpg";
import user from "../../../assets/img/mIsg7QBdpgJuZAJYdalsMEbyX50.jpg";
import { Button, SectionTitle } from "../../../components";

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
        transition={{ duration: 1 }}
        className="about-section-content"
      >
        <SectionTitle
          styleAbout="styleAbout"
          sectionTitle="Open your first crypto wallet, right now!"
          sectionDescription=" Vibrant is the best software platform to easily capture user feed back
          for your brand and products."
        />
        <Button bgColor="bgColor">
          <span className="btn-text btn">Get for Free</span>
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
