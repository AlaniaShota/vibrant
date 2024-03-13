import "./Home.scss";
import { About } from "./components/about";
import { Main } from "./components/main";
export const Home = () => {
  return (
    <div>
      <About />
      <Main />
    </div>
  );
};
