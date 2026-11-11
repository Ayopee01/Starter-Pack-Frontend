import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./page-ui/home";
import About from "./page-ui/about";
import Product from "./page-ui/product";
import Contact from "./page-ui/contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Product />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
