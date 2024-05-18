import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
// Components
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
