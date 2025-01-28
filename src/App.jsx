import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Header products={products} />
      <Outlet context={{products, setProducts}} />
    </>
  );
}

export default App;
