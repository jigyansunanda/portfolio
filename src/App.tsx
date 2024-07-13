import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
// import {Projects} from "./pages/Projects";
import { Techstack } from "./pages/TechStack";
import { Contact } from "./pages/Contact";
import { InvalidRoute } from "./pages/InvalidRoute";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      {/* Navigation bar */}
      <Navbar />
      {/* Routes for pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/tech-stack" element={<Techstack />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<InvalidRoute />} />
      </Routes>
    </div>
  );
};

export default App;
