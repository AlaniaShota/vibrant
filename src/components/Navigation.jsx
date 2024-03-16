import { Logo } from "./Logo";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/Navigation.scss";
import "./style/HamburgerMenu.scss";

const links = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "FAQ", link: "/faq" },
  { id: 3, name: "BLOG", link: "/blog" },
];
export const Navigation = () => {
  return (
    <div className="navigation-section">
      {links.map((item) => (
        <div key={item.id}>
          <Link to={item.link} className="link">
            <span className="link-text">{item.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="hamburger-menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-menu-button"
      >
        <Logo />
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          // className=""
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="hamburger-menu-ul"
      >
        <motion.li variants={itemVariants} className="hamburger-menu-list">
          {links.map((item) => (
            <div key={item.id}>
              <Link to={item.link} className="link">
                <span className="link-text">{item.name}</span>
              </Link>
            </div>
          ))}
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
