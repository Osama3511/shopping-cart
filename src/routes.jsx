import App from "./App";
import Cart from "./pages/Cart";
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
      {
        path:'cart',
        element: <Cart />
      }
    ],
  },
];

export default routes;
