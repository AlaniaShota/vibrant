import { Button, Logo, Navigation } from "./index";

import { Outlet } from "react-router-dom";
import "./style/Layout.scss";
export const Layout = () => {
  return (
    <div>
      <div className="navigation-header">
        <Logo />
        <div className="navigation-content">
          <Navigation />
          <Button>
            <span className="btn-text">Get for Free</span>
          </Button>
        </div>
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
