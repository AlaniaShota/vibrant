import { fqaData } from "../mockData/faq/FAQData";
import "./FAQ.scss";

export const FAQ = () => (
  <div className="fqa">
    <div className="fqa-container">
      <div className="fqa-content">
        <h1 className="fqa-content-title">{fqaData.sectionTitle}</h1>
        <p className="fqa-content-description">{fqaData.sectionDescription}</p>
      </div>
      <div className="fqa-container-questions">
        {fqaData.faqs.map((item) => (
          <ul className="fqa-section-ul" key={item.id}>
            <li className="fqa-section-list">
              <h1 className="fqa-section-title">{item.title}</h1>
              <p className="fqa-section-description">{item.description}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  </div>
);
