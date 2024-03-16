import "./FAQ.scss";

export const FAQ = () => {
  const fqaData = [
    {
      id: 1,
      title: "Can I cancel my subscription at any time?",
      description:
        "You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.",
    },
    {
      id: 2,
      title: "What payment options do you offer?",
      description:
        "We support payment through credit card and Paypal. Invoicing and purchase orders are only available with our Enterprise plan.",
    },
    {
      id: 3,
      title: "How much does a subscription cost?",
      description:
        "Try a subscription free for 14 days, no credit card required. After your trial, pick a pricing plan that suits the size and stage of your business.",
    },
    {
      id: 4,
      title: "What is your refund policy?",
      description:
        "For monthly plans, there is no refund and your access will stop at the end of your billing cycle. For annual plans, there is a 7 day grace period.",
    },
  ];
  return (
    <div className="fqa">
      <div className="fqa-container">
        <div className="fqa-content">
          <h1 className="fqa-content-title">Frequently asked questions</h1>
          <p className="fqa-content-description">
            Contact us via support if you have any more questions.
          </p>
        </div>
        <div className="fqa-container-questions">
          {fqaData.map((item) => (
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
};
