import "./App.css";
import "./Style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}