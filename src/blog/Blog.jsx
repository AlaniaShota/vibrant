import { BlogCard } from "./components";

import { Banner, SectionTitle } from "../components";
import "./Blog.scss";

export const Blog = () => {
  return (
    <div className="blog-section">
      <SectionTitle
        sectionTitle="Blog"
        sectionDescription="Find all of our latest stories and subscribe to our newsletter for more."
        styleAbout="styleAbout"
      />
      <BlogCard />
      <Banner />
    </div>
  );
};
