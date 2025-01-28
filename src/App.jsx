import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./styles/app.css";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Header products={products} />
      <section className="content">
        <Outlet context={{ products, setProducts }} />
      </section>
    </>
  );
}

export default App;
