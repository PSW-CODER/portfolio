import "./App.css";
import "./Style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    document.title = 'Pyae Sone Win - Portfolio'
  })

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