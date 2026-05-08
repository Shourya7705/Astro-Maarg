import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Awards from "./components/Awards";
import About from "./components/About";
import Services from "./components/Services";
// import Media from "./components/Media";
import Testimonials from "./components/Testimonials";
import Horoscope from "./components/Horoscope";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="stars-bg" id="stars"></div>
      <Ticker />
      <Header />
      <Hero />
      <Awards />
      <About />
      <Services />
      <Horoscope/>
      {/* <Media /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
