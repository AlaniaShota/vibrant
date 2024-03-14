import "./Clients.scss";
import firstUserImg from "../../../assets/img/bCv2DXuDTqfyx5oVKBQzJndlU.webp";
import secondUserImg from "../../../assets/img/ZwPzFVgvaVbEUJwDhUh9UuuLnY.webp";
import thirdUserImg from "../../../assets/img/ok3WgpnP1qzKxV0qRwNg7d884.webp";
import fourthUserImg from "../../../assets/img/LpEsGQqhge3a98SClXMyt1k4Q.webp";
import fifthUserImg from "../../../assets/img/pOzITiOCuYzBaOabfGuxIowI8s.webp";
import sixthUserImg from "../../../assets/img/bwYxT2ryzUcDi8QacTlQa8iHhIU.webp";
import seventhUserImg from "../../../assets/img/xXIwCQFs1Nr2rdWr1ElUxM0g0.webp";
import eightUserImg from "../../../assets/img/Omxy7ALLTI9vOgAuf9Z1XgMasZ8.webp";
import ninthUserImg from "../../../assets/img/HUJtNVk2RvqzlxrYo11UQG49ugc.webp";
export const Clients = () => {
  const clientsData = [
    {
      id: 1,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: firstUserImg,
      description:
        "Fusce quis sapien tristique mauris tempor tristique. Donec efficitur gravida nibh, ac aliquet diam volutpat non.",
    },
    {
      id: 2,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: secondUserImg,
      description:
        "Morbi at metus accumsan, posuere mi quis, tempus tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: thirdUserImg,
      description:
        "Mauris nulla ex, rutrum vitae faucibus cursus, bibendum nec arcu.",
    },
    {
      id: 4,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: fourthUserImg,
      description:
        "Mauris nulla ex, rutrum vitae faucibus cursus, bibendum nec arcu.",
    },
    {
      id: 5,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: fifthUserImg,
      description:
        "Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. Vestibulum at erat ut velit egestas venenatis sit amet nec metus.",
      secondDescription: "Integer fringilla erat vel sem luctus posuere.",
    },
    {
      id: 6,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: sixthUserImg,
      description:
        "Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. ",
      secondDescription:
        "Vestibulum at erat ut velit egestas venenatis sit amet nec metus.",
    },
    {
      id: 7,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: seventhUserImg,
      description:
        "Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. ",
      secondDescription:
        "Vestibulum at erat ut velit egestas venenatis sit amet nec metus.",
    },
    {
      id: 8,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: eightUserImg,
      description:
        "Donec efficitur gravida nibh, ac aliquet diam volutpat non.",
    },
    {
      id: 9,
      name: "Bryan Smith",
      status: "CEO Framer",
      img: ninthUserImg,
      description:
        "Fusce quis sapien tristique mauris tempor tristique. Donec efficitur gravida nibh, ac aliquet diam volutpat non.",
    },
  ];

  return (
    <div className="clients-section">
      <div className="clients-section-header">
        <h1 className="clients-section-title">What people say</h1>
      </div>
      <div className="clients-container">
        {clientsData.map((item) => (
          <div key={item.id} className="client-card">
            <div className="client-card-header">
              <div className="client-card-img">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="client-card-img-content"
                />
              </div>
              <div className="client-title">
                <h3 className="client-name">{item.name}</h3>
                <span className="client-status">{item.status}</span>
              </div>
            </div>
            <div className="client-coments-section">
              <p className="client-coments">{item.description}</p>
              {item.secondDescription ? (
                <p className="client-secondary-coment">
                  {item.secondDescription}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
