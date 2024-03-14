import overview from "../../../assets/img/Pzrx2TCfEuPtWYzxPCANNXexA.webp";
import overviewSecond from "../../../assets/img/Pzrx2TCfEuPtWYzxPCANNXexA.png";
import paid from "../../../assets/img/invoicing.726e44e3.jpg";
import user from "../../../assets/img/mIsg7QBdpgJuZAJYdalsMEbyX50.jpg";
import { Button } from "../../../components";

import { motion } from "framer-motion";

import "./About.scss";

export const About = () => {
  return (
    <motion.div className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="about-section-description"
      >
        <h1 className="about-title">
          Open your first crypto wallet, right now!
        </h1>
        <p className="about-description">
          Vibrant is the best software platform to easily capture user feed back
          for your brand and products.
        </p>
        <Button>
          <span className="btn-text">Get for Free</span>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="about-img-overview"
      >
        <img src={overview} alt="Overview" className="overview" />
        <img src={paid} alt="Error" className="paid-img" />
        <img src={user} alt="Error" className="user-img" />
      </motion.div>
    </motion.div>
  );
};
