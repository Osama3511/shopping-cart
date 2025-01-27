import Card from "../components/Card.jsx";
import { useState, useEffect } from "react";
function useProductUrls() {
  const [productUrls, setproductUrls] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://fakestoreapi.com/products?limit=3";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <section style={{ display: "flex", gap: "16px" }}>
        {productUrls.map((product) => {
          return (
            <Card
              key={product.title}
              src={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </section>
    </>
  );
}

export default Products;
