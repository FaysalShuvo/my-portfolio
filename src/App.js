import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import Projects from "./components/Projects/Projects";
import "./App.css";
import Resume from "./components/Resume/Resume";
import AboutMe from "./components/AboutMe/AboutMe";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import { RiMenuFoldFill } from "react-icons/ri";

function App() {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <>
      <div className="app-body">
        <button onClick={toggleMenu} className="btn btn-light">
          <RiMenuFoldFill />
        </button>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/projects" component={() => <Projects />} />
        <Route path="/resume" component={() => <Resume />} />
        <Route path="/about-me" component={() => <AboutMe />} />
        <Route path="/blog" component={() => <Blogs />} />
      </div>
    </>
  );
}

export default App;
