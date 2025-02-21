import Hero from "./homeSections/Hero";
import About from "./homeSections/About";
import Portfolio from "./homeSections/Portfolio";
import Services from "./homeSections/Services";
import Blog from "./homeSections/Blog";
import Contact from "./homeSections/Contact";
import Footer from "./homeSections/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
