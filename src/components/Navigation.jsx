import { Link } from "react-router-dom";
import "./style/Navigation.scss";
export const Navigation = () => {
  const links = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "FAQ", link: "/faq" },
    { id: 3, name: "BLOG", link: "/blog" },
  ];
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
