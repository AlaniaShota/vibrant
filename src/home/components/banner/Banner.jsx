import bannerImg from "../../../assets/img/uuIOyWfEyv64PXBpwme44mnxURA.webp";
import "./Banner.scss";
import { Button } from "../../../components";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Banner = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="banner">
      <motion.div
        animate={{ scale: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className="banner-section"
      >
        <div className="banner-section-about">
          <h1 className="banner-section-title">
            Download the app and start today!
          </h1>
          <div>
            <Button bgColor="bgColor">
              <span className="btn-text btn">Get for Free</span>
            </Button>
          </div>
          <span className="banner-span-text">*No credit card requires</span>
        </div>
        <div className="banner-img-content">
          <img
            src={bannerImg}
            alt="Banner"
            loading="lazy"
            className="banner-img"
          />
        </div>
      </motion.div>
    </div>
  );
};
