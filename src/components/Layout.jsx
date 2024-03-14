import { Button, Logo, Navigation } from "./index";

import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import "./style/Layout.scss";
export const Layout = () => {
  return (
    <>
      <div className="navigation">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="navigation-header"
        >
          <Logo />
          <motion.div
            // initial={{ opacity: 0, y: -50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1 }}
            className="navigation-content"
          >
            <Navigation />
            <Button>
              <span className="btn-text">Get for Free</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <section>
        <Outlet />
      </section>
    </>
  );
};
