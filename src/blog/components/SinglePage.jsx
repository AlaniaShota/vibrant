import img1 from "../../assets/img/3hd20tl56kwOdB7P7jn5HHqXGs.webp";
import img2 from "../../assets/img/aiAFl9U9WCY6NriNgOJLAYPPSE.webp";
import img3 from "../../assets/img/5jIQ99jZEHCqm7KZDwakGWzz4.webp";
import img4 from "../../assets/img/h96tZgL03Lf7FIgacqYsZF2hBoY.webp";

import { motion } from "framer-motion";
import "./SinglePage.scss";
import { useParams } from "react-router-dom";
export const SinglePage = () => {
  const { id } = useParams();
  const cardData = [
    {
      id: 1,
      title: "10 ways to Improve Your Launch Campaign",
      secondTitle:
        "How to improve your web design process in a few easy steps.",
      img: img1,
      data: "Apr 8, 2022",
      description:
        "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. The prediction is that by 2029, the job outlook for these two fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming to work in a freelance capacity, a career in web design can offer a variety of employment arrangements, competitive salaries, and opportunities to utilize both technical and creative skill sets.",
      question: "What does a career in web design involve?",
      answer:
        "A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video.  Requiring a range of creative and technical skills, web designers may be involved in work across a range of industries, including software companies, IT consultancies, web design companies, corporate organizations, and more. ",
      secAnswer:
        "In contrast with web developers, web designers tend to play a more creative role, crafting the overall vision and design of a site, and determining how to best incorporate the necessary functionality. However, there can be significant overlap between the roles.",
      development: "Full-stack, back-end, and front-end web development",
      developmentFirstDescription:
        "The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group web developers and digital designers into one category. However, they define them separately, stating that web developers create and maintain websites and are responsible for the technical aspects including performance and capacity.  Web or digital designers, on the other hand, are responsible for the look and functionality of websites and interfaces. They develop, create, and test the layout, functions, and navigation for usability. ",
      developmentSecondDescription:
        "Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.",
      designers: "Are web designers in demand in 2022?",
      designersFirstDescription:
        "In our ever-increasingly digital environment, there is a constant need for websites—and therefore for web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand for web developers is only expected to rise.Web designers with significant coding experience are typically in higher demand, and can usually expect a higher salary. ",
      designersSecondDescription:
        "Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others. But certain skill sets are basic to web design, most of which are key to how to become a web designer in 2022.",
    },
    {
      id: 2,
      title: "Enhancing Your Website's Search Engine Optimization",
      secondTitle:
        "Build a unique experience by mixing and matching components.",
      img: img2,
      data: "Mar 15, 2022",
      question: "What is a landing page?",
      answer:
        "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue. Unlike typical web pages, landing pages only have one call to action, or CTA, and they are usually tied to a specific marketing or advertising campaign. The hyper-focused nature of landing pages means they come with a pretty standard set of best practices.",
      development: "Landing pages vs. front pages",
      developmentFirstDescription:
        "A typical front page or website in general includes a full navigation bar with tons of links throughout the page linking to other pages or pieces of content. A good landing page should only have one link, or multiple links that all point to the same thing. Having one CTA on your landing page increases conversions because there’s less distraction—fewer equally appealing options to prompt your users into leaving your landing page.",
      developmentSecondDescription:
        "Your brand’s front page has totally different goals. It should show off your brand’s personality, let people explore different features, find blogs and support articles, or even apply for a job. But they won’t necessarily purchase your product from the front page. And that’s why we need landing pages.",
      developmentThirdDescription:
        "Since landing pages are tied to specific campaigns, you don’t need to worry about users lacking information about your product. They arrived at your landing page because they were interested in an ad or post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web. With super detailed campaigns pointing to easy-to-use landing pages, you’re getting high-quality leads that are actually interested in using your product.",
      designers: "Best practices for creating a landing page",
      designersFirstDescription:
        "What makes an easy-to-use landing page? Overall it’s clear, concise, and doesn’t give users any options except for the main CTA.In terms of copy, your landing page should have one clear message. The header of your page should promote the desired action you want visitors to take. And additionally it should explain the benefits of performing this action.",
      designersSecondDescription:
        "The visual design of your page should be very simple. Unlike your front page, this is not the place to go crazy with brand personality—so no wild animations or complex design elements. You wouldn’t want to distract visitors from performing the main action of your page.",
      designersThirdDescription:
        "Landing page CTA’s are typically buttons, sometimes accompanied by an input field if you need to collect user information. To ensure your buttons are clicked, make sure they stand out visually. This can be done with contrasting the button color with your page background and clear copy on the button itself. For example, if you are asking visitors to book a demo, write“Book a demo” clearly on the CTA button.",
    },
    {
      id: 3,
      title: "Building Blocks for Your Website",
      secondTitle:
        "Build a unique experience by mixing and matching components.",
      img: img3,
      data: "Feb 6, 2022",
      description:
        "Navigation is key within any digital interface. Smart Components enable us to create custom interactive navigation components that work perfectly with the rest of your prototype.In this guide, we will cover the concepts of nesting components, adding events to elements in a component using Event Variables, and passing these through your components. One of the main benefits of using nested components is that it provides full control over its states, such as unique hover states of elements within another component.",
      question: "Starting at the atomic level",
      answer:
        "Framer allows you to create fully interactive and animated components, and even allows you to nest components within other components. We’re building a navigation bar component for a website that will contain two different kinds of nested components, with their own unique interactions. Our project will contain a Navigation bar that contains various nested components, namely five Nav items and one Shopping cart component. The design of our nested components, the nav list item and the shopping cart, will impact how we design our navigation bar. For this reason, an optimal workflow includes starting with the 'deepest' nested component and building up from there.",
      development: "Nesting components",
      developmentFirstDescription:
        " Once we have our two components ready, we can start creating the component in which we will nest these. Draw your navigation bar, select it on the canvas and click the Component tool in the Toolbar. To nest a different component in our new component, just drag any other component to the Component Canvas and place it within your designed navigation bar.",
      designers: "Triggering interactions from the navigation bar",
      designersFirstDescription:
        " Back on the main canvas, we’d like to be able to tap 'Clothing' and navigate to an entire new Screen. If you’d connect the component using the Prototyping Connector to a new screen, we could set up an Interaction. However, this would be triggered if we tap anywhere within our component. This isn’t what we want to do, as we want to trigger this transition only from a specific element. This is where Event Variables come in, which are special types of Variables not attached to properties (like opacity or fill) but instead to events.",
    },
    {
      id: 4,
      title: "How to Improve Web Design Process",
      secondTitle:
        "How to improve your web design process in a few easy steps.",
      img: img4,
      data: "Feb 28, 2022",
      description:
        "Last month, I had the chance to attend CSS Day in Amsterdam, a two day event split between a “UI day” focusing on the intersection of design and development and a “CSS day”, with speakers who covered more in-depth, technical CSS subjects. The talks were as diverse as the background of the speakers themselves, but there was one common thread: In this era of rapid change, are we, as product people, equipped to design for automation, machine learning, and AI?",
      development: "What does automation mean for designers?",
      developmentFirstDescription:
        "It's hard to work on a product team that hasn’t automated some part of their workflow in the name of productivity. If machines can take care of the repeatable tasks and heavy lifting, designers can focus on doing more meaningful work. But how does this affect the way we use the work being created by machines?",
      developmentSecondDescription:
        "Josh Clark, founder of design studio Big Medium, provoked the audience with this very question during his talk, ‘A.I. is your New Design Material’. Some of the most impressive advancements in recent technology are things like facial recognition, predictive text, and image search, all powered by machine learning. But it's important to remember—all of these technologies are still built on code. The upside is less room for error. No real emotions, expectations, or feelings get in the way of the job it was designed to do. Yet, as humans, we assume that when facial recognition fails, the whole process is inherently flawed. But was it really?",
      developmentThirdDescription:
        "The point of introducing machine learning into our products was never to have them do all the work. Instead, algorithms and logic-based solutions ought only provide humans with better insight so as to empower us to arrive at better solutions, faster.",
      designers: "How do we design for the unknown future?",
      designersFirstDescription:
        "Jared Spool, Co-Founder of UIE asks, “What was the most important thing you learned yesterday, and how will it impact what you do in the future?”",
      designersSecondDescription:
        "As designers and researchers, we essentially always need to think about how we design products for the future, even as we’re meeting the demands of present day design. A tall order, especially when things move as fast as they have been over the last decade. To start, Jared advocates for looking back at the ways in which our design processes have already changed.",
      designersThirdDescription:
        "Remember when UX/UI wasn't a priority for many companies? As a consultant during a time when the Internet had yet to hit mass market appeal, Jared was able to steer many companies into a mindset that considered the user experience of a product. But this also lets us gain input into how UX and UI has looked over the years, which might give us a better idea of what these concepts will look like moving forward. Jared describes a term called 'The UX Tipping Point', with great actionable steps on how to get there.",
    },
  ];
  const selectedPost = cardData.find((item) => item.id === parseInt(id));
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
        transition={{ duration: 0.8}}
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
