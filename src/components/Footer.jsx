import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

import "./style/Footer.scss";

export const Footer = () => {
  return (
    <div className="navigation-footer">
      <div className="navigation-logo">
        <Logo />
      </div>
      <div className="navigation-content-footer">
        <Navigation />
      </div>
    </div>
  );
};
