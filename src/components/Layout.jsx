import { Button, Logo, Navigation, HamburgerMenu, Footer } from "./index";

import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import "./style/Layout.scss";
import { useEffect, useState } from "react";

export const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="navigation">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="navigation"
        >
          <motion.div className="navigation-hamburger-content">
            {isMobile ? (
              <HamburgerMenu />
            ) : (
              <div className="navigation-header">
                <div className="navigation-logo">
                  <Logo />
                </div>
                <div className="navigation-content">
                  <Navigation />
                  <Button>
                    <span className="btn-text">Get for Free</span>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
      <section>
        <Outlet />
      </section>
      <>
        <Footer />
      </>
    </>
  );
};
