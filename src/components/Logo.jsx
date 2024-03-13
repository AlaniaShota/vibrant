import { Link } from "react-router-dom";
import "./style/Logo.scss";

export const Logo = () => {
  return (
    <Link to="/">
      <span className="logo">vibrant.</span>
    </Link>
  );
};
