import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";

function App() {
  return (
    <Router>
      <div className="App">
        <NavTabs />
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Contact resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    </Router>
  );
}

export default App;
