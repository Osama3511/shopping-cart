import Nav from "../components/nav";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Nav />
      <section>
        <h2>Our fake store!</h2>
        <Link to="products">shop now</Link>
      </section>
    </>
  );
}

export default Home;
