// //Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// //Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
// //Components
import Header from "./components/Header";
// //Tailwind CSS
import "./style.css";
// //test
// import Test from "./test/Test";

function App() {
  return (
    // <>
    //   <Test />
    // </>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
