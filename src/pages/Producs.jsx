import Card from "../components/Card.jsx";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Loading from "../components/Loading.jsx";
import ErrorPage from "./ErrorPage.jsx";
import "../styles/products.css"

function useProductUrls() {
  const [productUrls, setproductUrls] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://fakestoreapi.com/products?limit=20";

  useEffect(() => {
    const getImageurl = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("server error");
        }

        const json = await response.json();
        setproductUrls(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getImageurl();
  }, []);

  return { productUrls, loading, error };
}

function Products() {
  const { productUrls, error, loading } = useProductUrls();
  const { setProducts } = useOutletContext();

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <>
      <section className="product-section">
        {productUrls.map((product) => {
          return (
            <Card key={product.title} product={product} onClick={setProducts} />
          );
        })}
      </section>
    </>
  );
}

export default Products;
