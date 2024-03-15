import React from "react";

import "./PayloadCard.scss";

import { Button } from "../../../../components";

export const PayloadCard = () => {
  const payloadCardData = [
    {
      id: 1,
      title: "Personal",
      description: "Best for brands that need designs on an ongoing basis.",
      price: 2.99,
      designs: "Request unlimited designs",
      deliverables: "Deliverables as-you-need",
      revisions: "No limit on revisions",
    },
    {
      id: 2,
      title: "Business",
      description: "Best for brands that need designs on an ongoing basis.",
      price: 9.99,
      designs: "Request unlimited designs",
      deliverables: "Deliverables as-you-need",
      revisions: "No limit on revisions",
      code: "No code needed",
      support: "Individual help center",
      mentor: "Your personal mentor",
    },
  ];

  return (
    <div className="payload">
      <div className="payload-container">
        {payloadCardData.map((item) => (
          <div key={item.id} className="payload-card-content">
            <div className="payload-section">
              <div className="payload-section-header">
                <h1 className="payload-section-title">{item.title}</h1>
                <p className="payload-section-description">
                  {item.description}
                </p>
              </div>
              <div className="payload-section-main">
                <h1 className="payload-price">
                  ${item.price}
                  <span className="payload-mo">/mo</span>
                </h1>
                <Button bgColor="bgColor">
                  <span className="btn-text btn">Try for Free</span>
                </Button>
              </div>
            </div>
            <ul className="payload-section-about">
              <li className="payload-section-list">
                <h3 className="payload-text">{item.designs}</h3>
              </li>
              <li className="payload-section-list">
                <h3 className="payload-text">{item.deliverables}</h3>
              </li>
              <li className="payload-section-list">
                <h3 className="payload-text">{item.revisions}</h3>
              </li>
              {item.code && (
                <>
                  <li className="payload-section-list">
                    <h3 className="payload-text">{item.code}</h3>
                  </li>
                  <li className="payload-section-list">
                    <h3 className="payload-text">{item.support}</h3>
                  </li>
                  <li className="payload-section-list">
                    <h3 className="payload-text">{item.mentor}</h3>
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
