import { BlogCard } from "./components";

import { Banner, SectionTitle } from "../components";
import "./Blog.scss";
import { blogData } from "../mockData/blog/blogData";

export const Blog = () => (
  <div className="blog-section">
    <SectionTitle
      sectionTitle={blogData.sectionTitle}
      sectionDescription={blogData.sectionDescription}
      styleAbout="styleAbout"
    />
    <BlogCard blogData={blogData.blogs} />
    <Banner />
  </div>
);
