import "./BlogCard.scss";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const BlogCard = ({ blogData }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="card-container"
  >
    {blogData.map((item) => (
      <Link key={item.id} to={`/blog/${item.id}`} className="card-section">
        <div className="card-section-img-content">
          <img
            src={item.img}
            alt="Error"
            className="card-section-img"
            loading="lazy"
          />
        </div>
        <div className="card-section-title">
          <h1 className="card-title">{item.title}</h1>
          <h4 className="card-title-second">{item.secondTitle}</h4>
        </div>
      </Link>
    ))}
  </motion.div>
);
