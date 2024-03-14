import { motion } from "framer-motion";
import "./style/Button.scss";

export const Button = ({ children, bgColor }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${bgColor ? "button bgColor " : "button"}`}
    >
      {children}
    </motion.button>
  );
};
