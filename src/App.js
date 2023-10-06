import React from "react";
import Navbar from "./componants/Navbar.jsx";
import Home from "./componants/Home.jsx";
import Social from "./componants/Social.jsx";
import About from "./componants/About.jsx";
import Coding from "./componants/Coding.jsx";

import Contact from "./componants/Contact.jsx";
import Experience from "./componants/Experience.jsx";
import Project from "./componants/Project.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />

      <About />
      <Social />

      <Coding />
      <Experience />

      <Project />
      <Contact />
    </div>
  );
}

export default App;
