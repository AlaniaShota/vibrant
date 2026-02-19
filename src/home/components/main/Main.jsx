import { mainData } from "../../../mockData/home/mainData";

import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import "./Main.scss";

export const Main = () => (
  <div className="main-section">
    <AnimatePresence>
      {mainData.map((item) => (
        <MainItem key={item.id} item={item} />
      ))}
    </AnimatePresence>
  </div>
);

const MainItem = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="main-content"
    >
      <div className="main-about">
        <h1 className="main-title">{item.title}</h1>
        <p className="main-description">{item.description}</p>
      </div>
      <div className="main-img">
        <img
          src={item.img}
          alt="Error"
          loading="lazy"
          className="main-img-content"
        />
      </div>
    </motion.div>
  );
};
