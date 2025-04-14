import { useEffect, useRef, useState } from "react";
import "./App.css";
// import './Responsive.css';
import Navbar from "./components/Navbar";
import ToggleButton from "./components/ToggleButton";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ComingSoon from "./components/ComingSoon";
import Loader from "./components/Loader";
import { use } from "react";

function App() {
  const [darkMode, setdarkMode] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [windowSize, setwindowSize] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setwindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    let loaderDisappear = setTimeout(() => {
      setLoaderVisible(false);
    }, 2300);

    return () => {
      window.removeEventListener("resie", handleWindowResize);
      clearTimeout(loaderDisappear);
    };
  }, []);

  const toggleButtonFunction = () => {
    if (darkMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    setdarkMode((darkMode) => {
      return !darkMode;
    });
  };

  return (
    <div className="App">
      {loaderVisible && <Loader />}
      <Navbar />
      <ToggleButton
        toggleButtonFunction={toggleButtonFunction}
        darkMode={darkMode}
      />
      <Hero darkMode={darkMode}/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
