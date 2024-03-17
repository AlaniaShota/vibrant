import { About } from "./components/about";
import { Clients } from "./components/clients";
import { Main } from "./components/main";
import { Payload } from "./components/payload";

import { Banner } from "../components";

export const Home = () => {
  return (
    <>
      <About />
      <Main />
      <Banner />
      <Clients />
      <Payload />
    </>
  );
};
