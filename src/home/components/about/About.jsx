import overview from "../../../assets/img/Pzrx2TCfEuPtWYzxPCANNXexA.webp";
import overviewSecond from "../../../assets/img/Pzrx2TCfEuPtWYzxPCANNXexA.png";
import paid from "../../../assets/img/invoicing.726e44e3.jpg";
import user from "../../../assets/img/mIsg7QBdpgJuZAJYdalsMEbyX50.jpg";
import { Button } from "../../../components";

import "./About.scss";
import { useEffect, useState } from "react";

export const About = () => {
//   const [isSmallDevice, setIsSmallDevice] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallDevice(window.innerWidth < 1024);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // вызываем для инициализации
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  return (
    <div className="about-section">
      <div className="about-section-description">
        <h1 className="about-title">
          Open your first crypto wallet, right now!
        </h1>
        <p className="about-description">
          Vibrant is the best software platform to easily capture user feed back
          for your brand and products.
        </p>
        <Button>
          <span className="btn-text">Get for Free</span>
        </Button>
      </div>
      <div className="about-img-overview">
        <img
        //   src={isSmallDevice ? overviewSecond : overview}
        src={overview}
          alt="Overview"
          className="overview"
        />
        <img src={paid} alt="Error" className="paid-img" />
        <img src={user} alt="Error" className="user-img" />
      </div>
    </div>
  );
};
