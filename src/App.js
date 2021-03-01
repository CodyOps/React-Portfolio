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
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="demo-big-content">
      <NavTabs />
      <Main />
    </div>
  );
}

export default App;
