import { uiText } from "../mockData/uiText";

import { Link } from "react-router-dom";
import "./style/Logo.scss";

export const Logo = () => (
  <Link to="/">
    <span className="logo">{uiText.company}</span>
  </Link>
);
