import { Button } from "./Button";

import { uiText } from "../mockData/uiText";

import bannerImg from "../assets/img/uuIOyWfEyv64PXBpwme44mnxURA.webp";
import "./style/Banner.scss";

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
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: inView ? 1 : 1.1,
          opacity: inView ? 1 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.8,
        }}
        className="banner-section"
      >
        <div className="banner-section-about">
          <h1 className="banner-section-title">{uiText.download}</h1>
          <div>
            <Button bgColor="bgColor">
              <span className="btn-text btn">{uiText.buttonText}</span>
            </Button>
          </div>
          <span className="banner-span-text">{uiText.creditCard}</span>
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
