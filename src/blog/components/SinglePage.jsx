import { blogData } from "../../mockData/blog/blogData";

import { motion } from "framer-motion";
import "./SinglePage.scss";
import { useParams } from "react-router-dom";

export const SinglePage = () => {
  const { id } = useParams();

  const selectedPost = blogData.blogs.find((item) => item.id === parseInt(id));
  const {
    title,
    secondTitle,
    data,
    img,
    description,
    question,
    answer,
    secAnswer,
    development,
    developmentFirstDescription,
    developmentSecondDescription,
    developmentThirdDescription,
    designers,
    designersFirstDescription,
    designersSecondDescription,
    designersThirdDescription,
  } = selectedPost;

  return (
    <div className="post">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="post-container"
      >
        <div className="post-section-header">
          <h1 className="post-section-title">{title}</h1>
          <h2 className="post-section-second-title">{secondTitle}</h2>
          <span className="post-section-data">{data}</span>
        </div>
        <div className="post-section-img">
          <img src={img} alt="" className="post-img" loading="lazy" />
        </div>
        <div className="post-content">
          {description && <p className="post-text">{description}</p>}
          {question && <h1 className="post-title">{question}</h1>}
          {answer && (
            <>
              <p className="post-text">{answer}</p>
              {secAnswer && <p className="post-text">{secAnswer}</p>}
            </>
          )}
          {development && (
            <>
              <h1 className="post-title">{development}</h1>
              <p className="post-text">{developmentFirstDescription}</p>
              {developmentSecondDescription && (
                <p className="post-text">{developmentSecondDescription}</p>
              )}
              {developmentThirdDescription && (
                <p className="post-text">{developmentThirdDescription}</p>
              )}
            </>
          )}
          {designers && (
            <>
              <h1 className="post-title">{designers}</h1>
              <p className="post-text">{designersFirstDescription}</p>
              {designersSecondDescription && (
                <p className="post-text">{designersSecondDescription}</p>
              )}
              {designersThirdDescription && (
                <p className="post-text">{designersThirdDescription}</p>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};
