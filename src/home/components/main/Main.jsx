import firstImg from "../../../assets/img/b8kcv9pVQbAS9dj1SHUU0rfF00.webp";
import secondImg from "../../../assets/img/GztFrJNEyUA5WVtgOZT16S5jsU.webp";
import thirdImg from "../../../assets/img/fjGUpM9ZY4PmH5dABmnZKBYy7A.webp";

import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import "./Main.scss";
export const Main = () => {
  const data = [
    {
      id: 1,
      img: firstImg,
      title: "Check out your monthly summary with a glance.",
      description:
        "Vivamus facilisis, neque sit amet venenatis euismod, neque viverra velit, sit amet vehicula sapien elit eget tortor.",
    },
    {
      id: 2,
      img: secondImg,
      title: "Control your expenses and save money.",
      description:
        "Vivamus facilisis, neque sit amet venenatis euismod, neque viverra velit, sit amet vehicula sapien elit eget tortor.",
    },
    {
      id: 3,
      img: thirdImg,
      title: "Group bills? No problem, you can split it.",
      description:
        "Vivamus facilisis, neque sit amet venenatis euismod, est neque viverra velit, sit amet vehicula sapien elit eget tortor.",
    },
  ];

  return (
    <div className="main-section">
      <AnimatePresence>
        {data.map((item) => (
          <MainItem key={item.id} item={item} />
        ))}
      </AnimatePresence>
    </div>
  );
};

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
      transition={{ duration: 1 }}
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
