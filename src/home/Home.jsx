import "./Home.scss";
import { About } from "./components/about";
import { Banner } from "./components/banner";
import { Clients } from "./components/clients";
import { Main } from "./components/main";

export const Home = () => {
  return (
    <>
      <About />
      <Main />
      <Banner />
      <Clients />
    </>
  );
};
