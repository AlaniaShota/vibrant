import { routes } from "./routes/routes";

import "./style/index.css";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
