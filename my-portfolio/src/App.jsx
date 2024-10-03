import React from "react";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";



const App = () => {
  return (
    <div>
    <Header/>
<a href="/">       <Hero /> </a>
 <a href="about">     <About /> </a>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
