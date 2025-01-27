import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Producs";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
];

export default routes;
