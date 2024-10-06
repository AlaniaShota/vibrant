import { Home } from "../home";
import { FAQ } from "../faq";
import { Blog } from "../blog";
import { Layout } from "../components/Layout";
import { ScrollToTop } from "../components/ScrollToTop";
import { SinglePage } from "../blog/components";

import { createBrowserRouter } from "react-router-dom";


export const routes = createBrowserRouter([
  {
    element: (  <>
                  <Layout />
                  <ScrollToTop/>
                </>
              ),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      { path: "/blog/:id", element: <SinglePage /> },
    ],
  },
]);
